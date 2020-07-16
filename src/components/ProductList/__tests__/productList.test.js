import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, screen} from '@testing-library/react'
import {PureProductList as ProductList} from '../index'

// todo: expand tests
test('renders a product list', () => {
  const data = {
    allStrapiMcallenproduct: {
      edges: [
        {node: {id: 'Dish_1', name: 'test', price: 333}},
        {node: {id: 'Dish_2', name: 'test 2', price: 33}},
      ],
    },
  }

  render(<ProductList data={data} />)
  const len = document.querySelectorAll('li').length
  expect(len).toBe(2)
  expect(document.querySelector('a').getAttribute('href')).toBe('/product/test')
})
