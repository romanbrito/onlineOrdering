import React from 'react'
import {MdAdd, MdRemove, MdAddShoppingCart} from 'react-icons/md'
import {QButton} from './styles'

const ProductControls = ({quantity, setQuantity, addItem, loading}) => {
  return (
    <>
      <QButton
        disabled={quantity < 2}
        onClick={() => setQuantity(quantity - 1)}
      >
        <MdRemove />
      </QButton>
      {quantity}
      <QButton
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity > 10}
      >
        <MdAdd />
      </QButton>

      <QButton onClick={addItem} disabled={loading} className="add-order">
        {loading ? 'Adding...' : 'Add to order'} <MdAddShoppingCart />
      </QButton>
    </>
  )
}

export default ProductControls
