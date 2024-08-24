import {useEffect, useState} from 'react'
import axios from 'axios'
import {CharacterType, Nullable} from 'assets/types'
import {useRouter} from 'next/router'


export const useCharacter = (): Nullable<CharacterType> => {
    const [character, setCharacter] = useState<Nullable<CharacterType>>(null)

    /* нужно делать запрос за конкретным персонажем в зависимости от id
       id будет доставать из URI params */

    const router = useRouter()


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`)
            .then(response => {
                setCharacter(response.data)
            })
    }, [])
    return character
}




