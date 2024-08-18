import React from 'react'
import Image from 'next/image'
import {CharacterType} from '@/assets'

import s from './CharacterCard.module.scss'

type PropsType = {
    character: CharacterType
}

export const CharacterCard = ({character}: PropsType) => {

    const {name, image} = character

    return (
        <li className={s.characterCard}>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                priority
            />
            <h3>{character.name}</h3>
        </li>
    )
}


