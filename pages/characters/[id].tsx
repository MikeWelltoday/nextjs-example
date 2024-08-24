/* Пример динамического запроса */

import {CharacterCard, getLayout, HeadMeta} from '@/components'
import {useCharacter} from '@/assets/hooks/useCharacter'

function Character() {

    const character = useCharacter()

    return (
        <>
            <HeadMeta title={'Character'}/>
            {character && <CharacterCard character={character}/>}
        </>

    )
}

Character.getLayout = getLayout
export default Character






