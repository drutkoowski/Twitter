import '@/styles/views/bookmarks/index.scss'

function BookmarksWrapper () {
  return (
        <div className='content'>
            <div className='bookmarks'>
                <div className='bookmarks__navbar'>
                    <h4>Bookmarks</h4>
                    <p>@okuratny_rutek</p>
                </div>
                <div className='bookmarks__header'>
                    <img alt="Bookmarks" draggable="true"
                         src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-400x200.v1.366bcfc9.png"/>
                    <h4>Save Tweets for later</h4>
                    <p>Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
                </div>
            </div>
        </div>

  )
}

export default BookmarksWrapper
