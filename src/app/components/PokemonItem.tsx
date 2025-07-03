"use client";
import { useEffect, useState } from "react";
import { SimplePokemon } from "../interfaces/simple-pokemons";

export const PokemonItem = ({ id, name }: SimplePokemon) => {
    const [pokemonData, setPokemonData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [versionName, setVersionName] = useState<string>("???");


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [pokemonRes, speciesRes] = await Promise.all([
                    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
                    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                ]);

                if (!pokemonRes.ok || !speciesRes.ok) {
                    throw new Error("Error al cargar los datos del Pokémon");
                }
               
                const [pokemonData, speciesData] = await Promise.all([
                    pokemonRes.json(),
                    speciesRes.json()
                ]);
                if (pokemonData.game_indices && pokemonData.game_indices.length > 0) {
                    const firstIndex = pokemonData.game_indices[0];
                    setVersionName(firstIndex.version.name);
                }
                const flavorEntry = speciesData.flavor_text_entries.find(
                    (entry: any) => entry.language.name === "es"
                );

                const evoRes = await fetch(speciesData.evolution_chain.url);
                const evoData = await evoRes.json();
                const chainNames: string[] = [];
                const traverse = (node: any) => {
                    if (node) {
                        chainNames.push(node.species.name);
                        node.evolves_to.forEach(traverse);
                    }
                };
                traverse(evoData.chain);

                const damageRelations = await getDamageRelations(pokemonData.types);

                setPokemonData({
                    ...pokemonData,
                    speciesName: speciesData.name,
                    specieText: flavorEntry?.flavor_text || "Sin descripción",
                    evolutionChain: chainNames,
                    damageRelations
                });

            } catch (err) {
                console.error("Error al obtener los datos:", err);
                setError("Error al cargar los datos del Pokémon");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const getDamageRelations = async (types: any[]) => {
        const allDamageRelations = {
            double_damage_from: new Set<string>(),
            double_damage_to: new Set<string>(),
            half_damage_from: new Set<string>(),
            half_damage_to: new Set<string>(),
            no_damage_from: new Set<string>(),
            no_damage_to: new Set<string>(),
        };

        for (const type of types) {
            const typeData = await fetch(type.type.url).then(res => res.json());
            const relations = typeData.damage_relations;

            for (const key in relations) {
                if (key in allDamageRelations) {
                    relations[key].forEach((rel: any) => {
                        allDamageRelations[key as keyof typeof allDamageRelations].add(rel.name);
                    });
                }
            }
        }

        return {
            double_damage_from: Array.from(allDamageRelations.double_damage_from),
            double_damage_to: Array.from(allDamageRelations.double_damage_to),
            half_damage_from: Array.from(allDamageRelations.half_damage_from),
            half_damage_to: Array.from(allDamageRelations.half_damage_to),
            no_damage_from: Array.from(allDamageRelations.no_damage_from),
            no_damage_to: Array.from(allDamageRelations.no_damage_to),
        };
    };

    if (loading) return <PokemonSkeleton />;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!pokemonData) return null;

    return (
        <div className="w-full overflow-hidden flex justify-center items-center ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg">
            <div className="bg-[url('https://i.imgur.com/DNVGE5B.png')] bg-repeat">
                
                <div className="mx-5 mt-2 flex justify-between items-center shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50 border-t-teal-50 border-l-teal-50 border-b-[#000000] border-r-[#000000]">
                    <span className="font-Merriweather font-bold text-lg">{name}</span>
                    <img
                        src="https://static.wikia.nocookie.net/yugioh/images/a/a1/EARTH.svg"
                        alt={name}
                        className="mx-7 my-1"
                        height="30"
                        width="30"
                    />
                </div>

                <div className="mx-auto rounded-[1px] ring-4 my-1 h-[260px] w-[260px] shadow-lg shadow-black ring-offset-0 ring-[#808080]">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="mx-2">
                    <div className="bg-[url('https://i.imgur.com/neIKEeX.png')] bg-repeat">
                        <div className="bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#FFC85F] font-Merriweather">
                            <h1 className="font-bold capitalize">{pokemonData.speciesName}</h1>
                            <p className="text-[20px]">{pokemonData.specieText}</p>
                            
                            <div className="flex flex-col items-end">
                            <span>Aparece en: Pokemon {versionName}</span>
                                <span>Índice de juego {pokemonData.game_indices?.[0]?.game_index || "???"}</span>
                            </div>

                            {pokemonData.evolutionChain.length > 0 && (
                                <div className="mt-2 text-sm">
                                    <span className="font-bold">Cadena evolutiva:</span>{" "}
                                    {pokemonData.evolutionChain.join(" → ")}
                                </div>
                            )}

                            <div className="mt-3 text-sm space-y-1">
                                <p><strong>🟥 Recibe doble daño de:</strong> {pokemonData.damageRelations.double_damage_from.join(", ") || "Ninguno"}</p>
                                <p><strong>🟩 Hace doble daño a:</strong> {pokemonData.damageRelations.double_damage_to.join(", ") || "Ninguno"}</p>
                                <p><strong>🟨 Recibe medio daño de:</strong> {pokemonData.damageRelations.half_damage_from.join(", ") || "Ninguno"}</p>
                                <p><strong>🟦 Hace medio daño a:</strong> {pokemonData.damageRelations.half_damage_to.join(", ") || "Ninguno"}</p>
                                <p><strong>⬛ No recibe daño de:</strong> {pokemonData.damageRelations.no_damage_from.join(", ") || "Ninguno"}</p>
                                <p><strong>⬜ No hace daño a:</strong> {pokemonData.damageRelations.no_damage_to.join(", ") || "Ninguno"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-2 flex justify-between items-center">
                    <span className="text-[9px]">00000001</span>
                    <span className="text-[9px]">©1996 KAZUKI TAKAHASHI</span>
                </div>
            </div>
        </div>
    );
};

const PokemonSkeleton = () => (
    <div className="w-full overflow-hidden flex justify-center items-center ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg animate-pulse">
        <div className="w-full h-[500px] bg-gray-300"></div>
    </div>
);