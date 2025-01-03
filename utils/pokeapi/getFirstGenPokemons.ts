import { getGeneration } from 'services/pokeapi/getGeneration'
import { getPokemon } from 'services/pokeapi/getPokemon'
import { PokemonCard } from 'types/pokemonCard'
import { generationAdapter } from 'utils/pokeapi/adapters/generation'
import { pokemonAdapter } from 'utils/pokeapi/adapters/pokemon'

const FIRST_GENERATION_ID = 1

export const getFirstGenPokemons = async (): Promise<PokemonCard[]> => {
  const generationPokemonNames = generationAdapter(
    await getGeneration(FIRST_GENERATION_ID),
  )

  // TODO: uncap it once cache is functioning
  const cappedGenerationPokemonNames = generationPokemonNames.slice(0, 4)

  const pokemonPromises = cappedGenerationPokemonNames.map(async (name) => {
    const pokemon = pokemonAdapter(await getPokemon(name))
    return pokemon
  })
  const pokemons = await Promise.all(pokemonPromises)

  return pokemons
}
