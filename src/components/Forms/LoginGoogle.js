import React from 'react'
import {FaGoogle} from 'react-icons/fa'
import {SocLink} from './LoginGoogle-styles'
import {API_URL} from '../../config/api'

const SocialLink = () => {
  return (
    <SocLink>
      <a href={`${API_URL}/connect/google`}>
        <FaGoogle /> GOOGLE
      </a>
    </SocLink>
  )
}

export default SocialLink
