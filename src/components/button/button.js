import './button.css'

const MyButton = (props) => {
    return <button className='botonIncDec' onClick={props.handleClick}>{props.children}</button>
}

export default MyButton;