import { PokemonsResponse, AbilityResponse } from "@/app/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/interfaces/simple-pokemons";
import { PokemonItem } from "@/app/components/PokemonItem";
import { InfiniteScrollPokemonList } from "@/app/components/InfiniteScrollPokemonList";

const getPokemons = async (limit = 500, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

const getAbilityFlavorTexts = async (abilityName: string): Promise<string[]> => {
  const response: AbilityResponse = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`)
    .then(res => res.json());

  const textosEnEspañol = response.flavor_text_entries.filter(entry => entry.language.name === "es");

  return textosEnEspañol.map(entry => entry.flavor_text);
};

export default async function Page() {
  const data = await getPokemons();
  const textos = await getAbilityFlavorTexts("battle-armor");

  return (
    <div>
    <div>
      <InfiniteScrollPokemonList />
    </div>
    <div className="w-full py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.map(item => (
          <PokemonItem key={item.id} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
}