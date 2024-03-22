import { useState } from "react"
import Button from "./Button"
import Poppup from "./Poppup"

interface PageProps { }

function Page({ }: PageProps) {
  const [showPoppup, setShowPoppup] = useState(false)

  return (
    <div className="Page">
      <Button text="BTN" onClick={() => { setShowPoppup(true) }} />
      {showPoppup && <Poppup text="Tester c cool" closePopup={() => { setShowPoppup(false) }} />}
    </div>
  )
}

export default Page