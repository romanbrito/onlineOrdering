import React from 'react'
import {Link} from 'gatsby'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {closeStyles} from './styles'

const ClosePage = () => (
  <Link to="/" css={closeStyles}>
    <AiOutlineCloseCircle />
  </Link>
)

export default ClosePage
