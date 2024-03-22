import { render } from "@testing-library/react"
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Poppup from "./Poppup"

test("Can render Poppup", () => {
  render(<Poppup />)
})

test("Can render specific text in Poppup", () => {
  const text = "Click ici stp"
  const { getByText } = render(<Poppup text={text} />)
  expect(getByText(text)).toBeInTheDocument()
})

test("Can trigger closePopup when clicking on close icon", () => {
  const closePopup = jest.fn()
  const textLabel = "you should not be closed"

  const { getByRole, getByText } = render(<Poppup text={textLabel} closePopup={closePopup} />)
  expect(closePopup).toHaveBeenCalledTimes(0)

  const img = getByRole("img")
  img.click()

  expect(closePopup).toHaveBeenCalledTimes(1)

  const text = getByText(textLabel)
  text.click()
  expect(closePopup).toHaveBeenCalledTimes(1)
})