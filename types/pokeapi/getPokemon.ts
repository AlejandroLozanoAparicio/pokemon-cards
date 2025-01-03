export type GetPokemonResponse = {
  abilities: Ability2[]
  base_experience: number
  cries: Cries
  forms: Ability[]
  game_indices: Gameindex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: Ability
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export type Stat = {
  base_stat: number
  effort: number
  stat: Ability
}

type Move = {
  move: Ability
  version_group_details: Versiongroupdetail[]
}

type Versiongroupdetail = {
  level_learned_at: number
  move_learn_method: Ability
  version_group: Ability
}

type Gameindex = {
  game_index: number
  version: Ability
}

type Cries = {
  latest: string
  legacy: string
}

export type Ability2 = {
  ability: Ability
  is_hidden: boolean
  slot: number
}

export type Type = {
  slot: number
  type: Ability
}

export type Ability = {
  name: string
  url: string
}

export type Sprites = {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other: Other
  versions: Versions
}

type Versions = {
  'generation-i': Generationi
  'generation-ii': Generationii
  'generation-iii': Generationiii
  'generation-iv': Generationiv
  'generation-v': Generationv
  'generation-vi': Generationvi
  'generation-vii': Generationvii
  'generation-viii': Generationviii
}

type Generationviii = {
  icons: Dreamworld
}

type Generationvii = {
  icons: Dreamworld
  'ultra-sun-ultra-moon': Home
}

type Generationvi = {
  'omegaruby-alphasapphire': Home
  'x-y': Home
}

type Generationv = {
  'black-white': Blackwhite
}

type Blackwhite = {
  animated: Showdown
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

type Generationiv = {
  'diamond-pearl': Showdown
  'heartgold-soulsilver': Showdown
  platinum: Showdown
}

type Generationiii = {
  emerald: Officialartwork
  'firered-leafgreen': Fireredleafgreen
  'ruby-sapphire': Fireredleafgreen
}

type Fireredleafgreen = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

type Generationii = {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

type Gold = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

type Crystal = {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

type Generationi = {
  'red-blue': Redblue
  yellow: Redblue
}

type Redblue = {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

type Other = {
  dream_world: Dreamworld
  home: Home
  'official-artwork': Officialartwork
  showdown: Showdown
}

type Showdown = {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

type Officialartwork = {
  front_default: string
  front_shiny: string
}

type Home = {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

type Dreamworld = {
  front_default: string
  front_female: null
}
