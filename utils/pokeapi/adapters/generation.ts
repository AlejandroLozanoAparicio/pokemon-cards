import { GetGenerationResponse } from 'types/pokeapi/getGeneration'

export const generationAdapter = (generation: GetGenerationResponse) =>
  generation.pokemon_species.map((pokemonSpecies) => pokemonSpecies.name)
