export type GetGenerationResponse = {
  abilities: any[]
  id: number
  main_region: GenericObject
  moves: any[]
  name: string
  names: any[]
  pokemon_species: GenericObject[]
  types: GenericObject[]
  version_groups: GenericObject[]
}

type GenericObject = {
  name: string
  url: string
}
