import React from 'react'
import {Card} from './styles'

const CardComponent = ({name, image, description}) => {
  return (
    <Card>
      <h3 className="product-name">{name}</h3>
      <img className="product-image" src={image} alt={name} />
      <p className="product-description">{description}</p>
    </Card>
  )
}

export default CardComponent
