import React from 'react'
import {ProductCard} from './styles'

const ProductCardComponent = ({name, image, description}) => {
  return (
    <ProductCard>
      <h3 className="product-name">{name}</h3>
      <img
        className="product-image"
        // src={`http://localhost:1337${product.node.product.images[0].formats.thumbnail.url}`}
        src={image}
        alt={name}
      />
      <p className="product-description">{description}</p>
    </ProductCard>
  )
}

export default ProductCardComponent
