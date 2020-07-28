import React from 'react'
import {FaGoogle} from 'react-icons/fa'
import {SocLink} from './LoginGoogle-styles'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

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
