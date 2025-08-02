import { PokemonCard } from 'types/pokemonCard'
import Image from 'next/image'
import { AngleDown } from 'icons/AngleDown'

import styles from './Card.module.scss'

const SPRITE_SIZE = 96

enum SUPER_ENUM_VALUES {
  VALUE_1 = 'value_1',
  VALUE_2 = 'value_2',
  VALUE_3 = 'value_3',
}

const COMPONENT_MAPPER: Record<SUPER_ENUM_VALUES, Function> = {
  [SUPER_ENUM_VALUES.VALUE_1]: () => {
    return <div></div>
  },
  [SUPER_ENUM_VALUES.VALUE_2]: () => {
    return <p></p>
  },
  [SUPER_ENUM_VALUES.VALUE_3]: (src: string, alt: string) => {
    return <img src={src} alt={alt} />
  },
}

const type: SUPER_ENUM_VALUES = SUPER_ENUM_VALUES.VALUE_1 // whatever type

const ComponentToUse = COMPONENT_MAPPER[type]

// return <ComponentToUse />

export const Card = ({
  name,
  height,
  weight,
  sprites,
  types,
  cries,
  abilities: _abilities,
  moves: _moves,
  stats: _stats,
}: PokemonCard) => {
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
}
