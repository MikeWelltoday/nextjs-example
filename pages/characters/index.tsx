import {useCharacters} from '@/assets'
import {CharacterCard, getLayout, HeadMeta, Navbar} from '@/components'

function Characters() {

    const characters = useCharacters()

    return <>
        <HeadMeta title={'Characters'}/>
        <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px'}}>
            {
                characters?.length && characters.map(item =>
                    <CharacterCard key={item.id} character={item}/>)
            }
        </ul>
    </>
}

/* оборачиваем функцию в layout */
Characters.getLayout = getLayout
export default Characters


