import { PokemonCard } from 'types/pokemonCard'
import { Card } from 'components/Card/Card'
import styles from './Pokedex.module.scss'

type PokedexProps = { allPokemon: PokemonCard[] }

export const Pokedex = ({ allPokemon }: PokedexProps) => (
  <ul className={styles.container}>
    {allPokemon.map((pokemonCard) => (
      <Card {...pokemonCard} key={`pokemon-card-${pokemonCard.name}`} />
    ))}
  </ul>
)
