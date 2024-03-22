import { render } from "@testing-library/react"
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Button from "./Button"

test("Can render Button", () => {
  render(<Button />)
})

test("Can render specific text in Button", () => {
  const text = "Click ici stp"
  const { getByText } = render(<Button text={text} />)
  expect(getByText(text)).toBeInTheDocument()
})

test("Can trigger onClick", () => {
  const onClick = jest.fn()
  const text = "click me"

  const { getByText } = render(<Button onClick={onClick} text={text} />)
  expect(onClick).toHaveBeenCalledTimes(0)

  const btn = getByText(text)
  btn.click()

  expect(onClick).toHaveBeenCalledTimes(1)
})