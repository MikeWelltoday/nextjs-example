import {useEffect, useState} from 'react'
import axios from 'axios'
import {CharacterType, Nullable} from '@/assets/types'


export const useCharacters = (): Nullable<CharacterType[]> => {
    const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null)
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
            .then(response => {
                setCharacters(response.data.results)
            })
    }, [])
    return characters
}





