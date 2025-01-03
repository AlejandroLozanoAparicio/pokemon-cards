import { BASE_POKE_API_URL, GET_POKEMON_ENDPOINT } from 'constants/pokeapi'
import { GetPokemonResponse } from 'types/pokeapi/getPokemon'

export const getPokemon = async (name: string): Promise<GetPokemonResponse> => {
  const endpointPath = `${GET_POKEMON_ENDPOINT}${name}`
  const url = new URL(endpointPath, BASE_POKE_API_URL)

  const response = await fetch(url.href)

  if (!response.ok) {
    throw new Error(
      `[POKEAPI] getPokemon service failed with status: ${response.status}`,
    )
  }

  return response.json()
}
