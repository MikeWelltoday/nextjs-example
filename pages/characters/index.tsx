import {useCharacters} from '@/assets'
import {CharacterCard, getLayout, HeadMeta, Navbar} from '@/components'
import Link from 'next/link'

function Characters() {

    const characters = useCharacters()

    return <>
        <HeadMeta title={'Characters'}/>
        <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
            {
                characters?.length && characters.map(item =>
                    <Link href={`/characters/${item.id}`} key={item.id}>
                        <CharacterCard character={item}/>
                    </Link>
                )

            }
        </ul>
    </>
}

/* оборачиваем функцию в layout */
Characters.getLayout = getLayout
export default Characters


