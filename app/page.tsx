import { Pokedex } from 'components/Pokedex/Pokedex'
import type { Metadata } from 'next'
import { getFirstGenPokemons } from 'utils/pokeapi/getFirstGenPokemons'

export const metadata: Metadata = {
  title: 'Showcase Assets',
  description: 'Home Page to showcase assets',
}

export default async function HomePage() {
  const firstGenPokemon = await getFirstGenPokemons()

  return <Pokedex allPokemon={firstGenPokemon} />
}
