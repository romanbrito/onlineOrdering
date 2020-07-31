import React from 'react'
import {checkStyles} from './styles'

const Checkbox = ({mod, handleMod}) => {
  return (
    <div css={checkStyles}>
      <input
        type="checkbox"
        name={mod}
        value={mod}
        onChange={e => handleMod(e)}
        className="mod-selection"
        id={mod}
      />
      <label htmlFor={mod}>{mod}</label>
    </div>
  )
}

export default Checkbox
