import './Button.css'

const Button = (props) => {
    const {isOutline, icon, text, ...rest} = props;
  return (
    <button {...rest} className= {isOutline ? 'outline-btn' : 'primary-btn'}>
        {icon}
        {text}
    </button>
  )
}

export default Button