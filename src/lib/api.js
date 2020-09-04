import Cookies from 'js-cookie'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

const API_URL = process.env.API_URL || 'http://localhost:1337'

export const createOrder = async values => {
  const userToken = Cookies.get('token')
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(values),
  })

  return response
}
