import styled from '@emotion/styled'

export const ProductCard = styled.li`
  @supports (grid-area: auto) {
    display: grid;

    grid-template-areas: 'image' 'name' 'description';

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

// grid-template-columns: 1fr 1fr;
// grid-template-rows: 1fr 2fr;
// grid-template-areas:
//   'image name'
//   'image description';
