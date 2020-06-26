import styled from '@emotion/styled'

export const Cards = styled.ul`
  max-width: 700px;
  margin: 0 auto;
`
export const Card = styled.li`
  list-style: none;

  a {
    color: hsl(0, 0%, 5%);
    text-decoration: none;
    background: white;
    border: 1px transparent;
    transition: all 0.2s;
  }
  a:focus,
  a:hover {
    margin: -5px 5px 5px -5px;
    box-shadow: 5px 5px 0px 0px hsla(0, 0%, 70%, 0.8);
  }

  @supports (grid-area: auto) {
    a {
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
