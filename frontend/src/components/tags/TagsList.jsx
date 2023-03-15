import '@/styles/components/tags/tags_list.scss'
import Tag from './Tag.jsx'

function TagsList () {
  return (
        <div className='tags-container'>
            <Tag tag='Source 2' countryName='Poland' tweetsCount='45.2k'/>
            <Tag tag='Marta' countryName='Poland' tweetsCount='29.2k'/>

        </div>
  )
}

export default TagsList
