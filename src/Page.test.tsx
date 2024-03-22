import { render, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Page from "./Page"

test("When clicking on button, can display popup. Then can close popup", async () => {
  const { getByText, queryByText, getByRole } = render(<Page />)
  const btnText = "BTN"
  const popupText = "Tester c cool"


  expect(queryByText(popupText)).toBeNull()
  const btn = getByText(btnText)

  btn.click()

  await waitFor(() => {
    expect(getByText(popupText)).toBeInTheDocument()
  })

  const crossIcon = getByRole("img")
  crossIcon.click()

  return waitFor(() => {
    expect(queryByText(popupText)).toBeNull()
  })
})