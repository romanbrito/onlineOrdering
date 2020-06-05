import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import ProductList from '../index'

test('Renders', () => {
  render(<ProductList />)
  expect(screen.getByText(/Product List Component/i)).toBeInTheDocument()
})
