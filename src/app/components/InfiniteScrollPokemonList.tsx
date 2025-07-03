"use client";
import { useState, useEffect } from "react";
import { PokemonItem } from "./PokemonItem";
import { SimplePokemon } from "../interfaces/simple-pokemons";

export const InfiniteScrollPokemonList = () => {
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemons = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/pokemon?limit=20&offset=${(page - 1) * 20}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPokemons(prev => [...prev, ...data]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 500 >= 
          document.documentElement.offsetHeight && !loading) {
        fetchPokemons();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, loading, hasMore]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="w-full py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemons.map(pokemon => (
          <PokemonItem key={`${pokemon.id}-${pokemon.name}`} {...pokemon} />
        ))}
      </div>
      {loading && (
        <div className="col-span-full flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      {!hasMore && (
        <div className="col-span-full text-center py-8 text-gray-500">
          No hay más Pokémon para mostrar
        </div>
      )}
    </div>
  );
};