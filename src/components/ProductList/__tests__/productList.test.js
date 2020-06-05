import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import ProductList from '../index'

// const data = {"allStrapiDish":{"edges":[
//   {"node":{"id":"Dish_1","name":"test","price":333}},
//   {"node":{"id":"Dish_2","name":"test 2","price":33}}
// ]}}

test('Renders', () => {
  render(<ProductList />)
  expect(screen.getByText(/Product List Component/i)).toBeInTheDocument()
})
