import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import {PureCartLink as CartLink} from '../CartLink'

test('disable CartLink if no items in order', () => {
  let cartCount = 0
  const {container, getByText} = render(<CartLink cartCount={cartCount} />)
  expect(getByText('0 Items in Order')).toBeInTheDocument()
  expect(container.querySelector('a').className).toBe('disabled')
})

test('enable CartLink if items in order', () => {
  let cartCount = 11
  const {container, getByText} = render(<CartLink cartCount={cartCount} />)
  expect(getByText('11 Items in Order')).toBeInTheDocument()
  expect(container.querySelector('a').className).toBe('')
})
