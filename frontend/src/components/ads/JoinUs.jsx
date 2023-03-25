import Button from '../Button.jsx'
import '@/styles/components/ads/join_us.scss'
import { useState } from 'react'
import Modal from '../Modal.jsx'
import Input from '../Input.jsx'

function JoinUs () {
  const [modalCreateAccount, setModalCreateAccount] = useState(false)
  return (
        <div className='join-us'>
            <h4>New to Twitter?</h4>
            <small>Sign up now to get your own personalized timeline!</small>
            <Button text='Sign up with Google' classNames='white lg'/>
            <Button text='Sign up with Apple' classNames='white lg'/>
            <Button text='Create account' classNames='white lg' onClick={() => {
              setModalCreateAccount(!modalCreateAccount)
            }}/>
            <small>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</small>
            {modalCreateAccount &&
                <Modal>
                    <div className='modal__content__svg-container'>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M10.59 12 4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"/>
                        </svg>
                    </div>
                    <div className='modal__content__container'>
                        <div className='modal__content__container__header'>
                            <h4>Step 1 of 5</h4>
                        </div>
                        <div className='modal__content__container__content'>
                            <h4>Create your account</h4>
                            <div className='modal__content__container__content__form'>
                                <Input placeholder='Name' type='text' counter/>
                                <Input placeholder='Email' type='email'/>
                                <div className='modal__content__container__content__info'>
                                    <p>Date of birth</p>
                                    <small>This will not be shown publicly. Confirm your own age,
                                        even if this account is for a business, a pet, or something else.
                                    </small>
                                </div>
                                <div className='modal__content__container__content__form__select-container'>
                                    <Input type='select'>
                                        <option>Eeee</option>
                                    </Input>
                                    <Input type='select'>
                                        <option>Eeee</option>
                                    </Input>
                                    <Input type='select'>
                                        <option>Eeee</option>
                                    </Input>
                                </div>
                            </div>
                            <Button text='Next' classNames='lg white'/>
                        </div>

                    </div>

                </Modal>
            }
        </div>
  )
}

export default JoinUs
