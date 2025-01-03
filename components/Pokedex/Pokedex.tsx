import { PokemonCard } from 'types/pokemonCard'
import styles from './Pokedex.module.scss'
import Image from 'next/image'
import { AngleDown } from 'icons/AngleDown'

type PokedexProps = { allPokemon: PokemonCard[] }

const SPRITE_SIZE = 96

export const Pokedex = ({ allPokemon }: PokedexProps) => {
  return (
    <ul className={styles.container}>
      {allPokemon.map(
        ({
          name,
          height,
          weight,
          sprites,
          types,
          abilities: _abilities,
          moves: _moves,
          stats: _stats,
        }) => {
          const imageDescription = `${name} sprite`
          return (
            <li className={styles.pokemon} key={`${name}`}>
              <div className={styles.visibleInfo}>
                <Image
                  src={sprites.front_default}
                  alt={imageDescription}
                  title={imageDescription}
                  width={SPRITE_SIZE}
                  height={SPRITE_SIZE}
                />
                <h2>{name}</h2>
                <AngleDown />
              </div>
              <div className={styles.extraInfo}>
                <p>{`${height} m`}</p>
                <p>{`${weight} kg`}</p>
                {types.map((type) => (
                  <p key={type}>{type}</p>
                ))}
              </div>
            </li>
          )
        },
      )}
    </ul>
  )
}
