import { BASE_POKE_API_URL, GET_GENERATION_ENDPOINT } from 'constants/pokeapi'
import { type GetGenerationResponse } from 'types/pokeapi/getGeneration'

export const getGeneration = async (id = 1): Promise<GetGenerationResponse> => {
  const endpointPath = `${GET_GENERATION_ENDPOINT}${id}`
  const url = new URL(endpointPath, BASE_POKE_API_URL)

  const response = await fetch(url.href)

  if (!response.ok) {
    throw new Error(
      `[POKEAPI] getGeneration service failed with status: ${response.status}`,
    )
  }

  return response.json()
}
