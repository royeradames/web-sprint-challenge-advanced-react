import React from "react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", async () => {
   //render Contact form
   render(<CheckoutForm />)
   //query for the different inputs
   const firstNameInput = screen.getByLabelText(/First Name/i)
   const lastNameInput = screen.getByLabelText(/Last Name/i)
   const addressInput = screen.getByLabelText(/address/i)
   const cityInput = screen.getByLabelText(/city/i)
   const stateInput = screen.getByLabelText(/state/i)
   const zipInput = screen.getByLabelText(/zip/i)
   //fill out the inputs
   fireEvent.change(firstNameInput, { target: {value: 'Royer'}})
   fireEvent.change(lastNameInput, {target: {value:'Adames'}})
   fireEvent.change(addressInput, { target: {value: '506 Ezy St'}})
   fireEvent.change(cityInput, { target: {value: 'New York'}})
   fireEvent.change(stateInput, {target: { value: 'NY'}})
   fireEvent.change(zipInput, {target: { value: '12345'}})
   //query for the submit button
   const submitBtn = screen.getByRole('button')
   //click on the submit button
   await act(async() => fireEvent.click(submitBtn)) 
   //make our assertions
   expect(screen.getByText(/royer adames/i)).toBeInTheDocument()
   expect(screen.getByText(/506 Ezy St/i)).toBeInTheDocument()
   expect(screen.getByText(/New York, NY 12345/i)).toBeInTheDocument()
});
