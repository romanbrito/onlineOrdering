import Cookies from 'js-cookie'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {API_URL} from '../config/api'

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
