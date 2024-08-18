import {Inter} from 'next/font/google'
import {useCharacters} from '@/assets'
import {CharacterCard, HeadMeta, Navbar} from '@/components'

const inter = Inter({subsets: ['latin']})

export default function Characters() {

    const characters = useCharacters()

    return <>
        <HeadMeta title={'Characters'}/>
        <main style={{marginTop: '100px'}}>
            <Navbar/>
            <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
                {
                    characters?.length && characters.map(item =>
                        <CharacterCard key={item.id} character={item}/>)
                }
            </ul>
        </main>
    </>
}



