import styled from '@emotion/styled'

export const Card = styled.li`
  @supports (grid-area: auto) {
    display: grid;
    grid-template-columns: auto 6em;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      'name image'
      'description image';

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
  }
`
