import { NextResponse } from 'next/server';
import { PokemonsResponse } from '@/app/interfaces/pokemons-response';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit')) || 20;
  const offset = Number(searchParams.get('offset')) || 0;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data: PokemonsResponse = await response.json();

    const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    return NextResponse.json(pokemons);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch pokemons' },
      { status: 500 }
    );
  }
}