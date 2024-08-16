import Head from 'next/head'
import {Inter} from 'next/font/google'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Image from 'next/image'

const inter = Inter({subsets: ['latin']})

type CharacterType = {
    id: number
    name: string
    image: string
}

export default function Characters() {

    /* пример запроса */
    const [characters, setCharacters] = useState<null | CharacterType[]>(null)
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results)
            })
    }, [])

    console.log(characters)

    return <>
        <Head>
            Header
        </Head>
        <main>
            <ul>
                {characters?.length && characters.map(item => {
                        return (
                            <li key={item.id}>
                                <h3>{item.name}</h3>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </li>
                        )
                    }
                )}
            </ul>
        </main>
    </>
}



