interface PoppupProps {
  text?: string
  closePopup?: () => void
}

function Poppup({ text, closePopup }: PoppupProps) {
  return (
    <div className="Poppup">
      <img src="closePicture.png" alt="close button" onClick={closePopup} />
      <p>{text}</p>
    </div>
  )
}

export default Poppup