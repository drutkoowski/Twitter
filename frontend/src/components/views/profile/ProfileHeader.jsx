import Button from '../../Button.jsx'

function ProfileHeader () {
  return (
        <div className='content__profile-header'>
            <div className='content__profile-header__background'></div>
            <div className='content__profile-header__upper'>
                <div className='content__profile-header__upper__avatar'>
                    <img src="/default_image.png" alt="Avatar"/>
                </div>
                <div className='content__profile-header__upper__icon'>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                    </svg>
                </div>
                <div className='content__profile-header__upper__icon'>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M1.998 5.5a2.5 2.5 0 0 1 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5v-13zm2.5-.5a.5.5 0 0 0-.5.5v2.764l8 3.638 8-3.636V5.5a.5.5 0 0 0-.5-.5h-15zm15.5 5.463-8 3.636-8-3.638V18.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-8.037z"/>
                    </svg>
                </div>
                <Button text='Follow' classNames='white md'/>
            </div>
            <div className='content__profile-header__content'>
                <h4 className='content__profile-header__content__name'>rutek</h4>
                <p className='content__profile-header__content__username'>@okuratny_rutek</p>
                <p className='content__profile-header__content__description'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Pellentesque vitae est dictum risus
                    elementum feugiat. Morbi eleifend metus ac arcu pulvinar posuere. Fusce imperdiet diam nec pretium
                    maximus.</p>
                <div className='content__profile-header__content__info'>
                    <div className='content__profile-header__content__info__element'>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"/>
                        </svg>
                        <p>Warsaw</p>
                    </div>
                    <div className='content__profile-header__content__info__element'>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-12A2.5 2.5 0 0 1 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"/>
                        </svg>
                        <p>Joined March 2018</p>
                    </div>
                </div>
                <div className='content__profile-header__content__social-network'>
                    <div className='content__profile-header__content__social-network__element'>
                        <p><span>45</span> Following</p>
                    </div>
                    <div className='content__profile-header__content__social-network__element'>
                        <p><span>21</span> Followers</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProfileHeader
