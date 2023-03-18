import { useState } from 'react'
import TweetList from '../home/TweetList.jsx'

function ProfileContent () {
  const [seeTweets, setSeeTweets] = useState(true)
  const [seeReplies, setSeeReplies] = useState(false)
  const [seeMedia, setSeeMedia] = useState(false)
  const [seeLikes, setSeeLikes] = useState(false)
  const changeStatus = (setterFunc) => {
    setSeeTweets(false)
    setSeeReplies(false)
    setSeeMedia(false)
    setSeeLikes(false)
    setterFunc(true)
  }
  return (
        <div className='content__profile-container'>
            <div className='content__profile-container__header'>
                <div
                    className={seeTweets ? 'content__profile-container__header__element content__profile-container__header__element--active' : 'content__profile-container__header__element'}
                    onClick={() => changeStatus(setSeeTweets)}>
                    <p>Tweets</p>
                </div>
                <div
                    className={seeReplies ? 'content__profile-container__header__element content__profile-container__header__element--active' : 'content__profile-container__header__element'}
                    onClick={() => changeStatus(setSeeReplies)}>
                    <p>Replies</p>
                </div>
                <div
                    className={seeMedia ? 'content__profile-container__header__element content__profile-container__header__element--active' : 'content__profile-container__header__element'}
                    onClick={() => changeStatus(setSeeMedia)}>
                    <p>Media</p>
                </div>
                <div
                    className={seeLikes ? 'content__profile-container__header__element content__profile-container__header__element--active' : 'content__profile-container__header__element'}
                    onClick={() => changeStatus(setSeeLikes)}>
                    <p>Likes</p>
                </div>
            </div>
            <div className='content__profile-container__tweets'>
                <TweetList/>
            </div>
        </div>
  )
}

export default ProfileContent
