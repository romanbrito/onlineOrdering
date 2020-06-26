import styled from '@emotion/styled'

export const Card = styled.li`
  list-style: none;
  @supports (grid-area: auto) {
    a {
      text-decoration: none;
      display: grid;
      grid-template-columns: auto 6em;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        'name image'
        'description image'
        'price image';

      .product-name {
        grid-area: name;
        margin: 0;
      }
      .product-image {
        grid-area: image;
        margin: 0;
      }
      .product-description {
        grid-area: description;
        margin: 0;
      }
      .product-price {
        grid-area: price;
        margin: 0;
      }
    }
  }
`
