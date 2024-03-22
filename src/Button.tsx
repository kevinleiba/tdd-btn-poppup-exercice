
interface ButtonProps {
  text?: string
  onClick?: () => void
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="Button" onClick={onClick}>
      <p>{text}</p>
    </div>
  )
}

export default Button