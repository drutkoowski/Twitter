import '@/styles/components/tags/tag.scss'
import PropTypes from 'prop-types'

function Tag ({ countryName, tag, tweetsCount }) {
  return (
        <div className='tag'>
            <div className='tag__info'>
                <p>Trending in {countryName}</p>
                <h4>{tag}</h4>
                <p>Tweets: {tweetsCount}</p>
            </div>
            <img className='tag__more' src="/settings-helper.svg" alt="More"/>
        </div>
  )
}

Tag.propTypes = {
  countryName: PropTypes.string,
  tag: PropTypes.string,
  tweetsCount: PropTypes.string
}

export default Tag
