import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import {PureProductList as ProductList} from '../index'

// todo: remove the following, used just as reference
// import {render, fireEvent, screen} from '@testing-library/react'

const data = {
  allStrapiMcallenproduct: {
    edges: [
      {
        node: {
          id: 1,
          name: 'food1',
          product: {
            description: 'product 1',
            category: 'starters',
            images: [
              {
                formats: {
                  thumbnail: {
                    url: 'https://picsum.photos/id/1043/200/200.jpg',
                  },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          id: 2,
          name: 'food2',
          product: {
            description: 'product 2',
            category: 'signature_cheesesteaks',
            images: [
              {
                formats: {
                  thumbnail: {
                    url: 'https://picsum.photos/id/1043/200/200.jpg',
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
}
test('renders categories', () => {
  const {getByText} = render(<ProductList data={data} />)
  expect(getByText('starters')).toBeInTheDocument()
  expect(getByText('signature cheesesteaks')).toBeInTheDocument()
})

test('renders a product list', () => {
  const {container} = render(<ProductList data={data} />)
  const len = container.querySelectorAll('li').length
  expect(len).toBe(2)
  expect(container.querySelector('a').getAttribute('href')).toBe(
    '/product/food1',
  )

  const {getByText} = render(<ProductList data={null} />)
  expect(getByText('No items')).toBeInTheDocument()
})
