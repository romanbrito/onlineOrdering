import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import Card from '../index'

test('renders card', () => {
  const props = {
    name: 'food1',
    image: 'https://picsum.photos/id/1043/200/200.jpg',
    description: 'product 1',
  }
  const {container, getByText} = render(<Card {...props} />)
  expect(getByText('food1')).toBeInTheDocument()
  expect(getByText('product 1')).toBeInTheDocument()
  const image = container.querySelector('img')
  expect(image.src).toBe('https://picsum.photos/id/1043/200/200.jpg')
})

test('renders card no data', () => {
  const props = {
    name: '',
    image: '',
    description: '',
  }
  const {container, getByText} = render(<Card {...props} />)
  expect(getByText('food1')).toBeInTheDocument()
  expect(getByText('product 1')).toBeInTheDocument()
  const image = container.querySelector('img')
  expect(image.src).toBe('https://picsum.photos/id/1043/200/200.jpg')
})
