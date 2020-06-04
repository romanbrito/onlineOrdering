import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import Checkout from '../checkout'

test('renders checkout button', () => {
  render(<Checkout />)
  expect(screen.getByText(/checkout/i)).toBeInTheDocument()
})
