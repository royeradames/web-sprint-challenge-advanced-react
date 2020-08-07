import React from "react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"

import ShoppingCart from './ShoppingCart'
const plants = [{
  "name": "String of Dolphins",
  "id": 125341,
  "img": "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
  "price": 15
}]
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)
debugger

})


