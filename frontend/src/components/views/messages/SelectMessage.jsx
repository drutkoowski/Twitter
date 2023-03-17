import Button from '@/components/Button.jsx'

function SelectMessage () {
  return (
        <>
            <h4>Select a message</h4>
            <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
            <Button text='New message' classNames='primary md'/>
        </>
  )
}

export default SelectMessage
