import React, {useState} from 'react'
import {navigate} from 'gatsby'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {useShoppingCart, formatCurrencyString} from 'use-shopping-cart'
import {createOrder} from '../../lib/api'
import {checkoutStyles, cardStyles} from './CheckoutForm-styles'
// import CardSection from './CardSection'

// todo: add data to stripe.createToken(cardElement, data)
// https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement

const CheckoutForm = ({totalPrice, clearCart}) => {
  const [error, setError] = useState('')

  const stripe = useStripe()
  const elements = useElements()
  const {cartDetails} = useShoppingCart()

  const formattedPrice = formatCurrencyString({
    value: totalPrice,
    currency: 'USD',
  })

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          address_line1: '',
          address_line2: '',
          address_city: '',
          address_state: '',
          address_zip: '',
          address_country: 'US',
        }}
        onSubmit={async (values, {setSubmitting}) => {
          // todo: turn into try catch
          const cardNumberElement = elements.getElement(CardNumberElement)
          // const cardCvcElement = elements.getElement(CardCvcElement)
          const token = await stripe.createToken(cardNumberElement, values)
          const response = await createOrder({
            ...values,
            amount: totalPrice,
            token: token.token.id,
            dishes: cartDetails,
          })
          // todo: remove console.log
          console.log('response', response)
          if (!response.ok) {
            setError(response.statusText)
          }
          setSubmitting(false)
          clearCart()
          navigate('/')
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Required'),
          address_line1: Yup.string().required('Required'),
          address_city: Yup.string().required('Required'),
          address_state: Yup.string().required('Required'),
          address_zip: Yup.number().required('Required'),
          address_country: Yup.string().required('Required'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props
          return (
            <form onSubmit={handleSubmit} css={checkoutStyles}>
              <h3>Total {formattedPrice}</h3>
              <div className="cus-data">
                <label htmlFor="name">
                  Name on Card
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Name on Card"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.name ? touched.name && 'error' : ''
                    }`}
                  />
                </label>
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}

                <label htmlFor="address_line1">
                  Address
                  <input
                    name="address_line1"
                    type="text"
                    id="address_line1"
                    placeholder="Address"
                    value={values.address_line1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.address_line1
                        ? touched.address_line1 && 'error'
                        : ''
                    }`}
                  />
                </label>
                {errors.address_line1 && touched.address_line1 && (
                  <div className="input-feedback">{errors.address_line1}</div>
                )}

                <label htmlFor="address_line2">
                  Address 2
                  <input
                    name="address_line2"
                    type="text"
                    id="address_line2"
                    placeholder="Address 2"
                    value={values.address_line2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.address_line2
                        ? touched.address_line2 && 'error'
                        : ''
                    }`}
                  />
                </label>
                {errors.address_line2 && touched.address_line2 && (
                  <div className="input-feedback">{errors.address_line2}</div>
                )}

                <label htmlFor="address_city">
                  City
                  <input
                    name="address_city"
                    type="text"
                    id="address_city"
                    placeholder="City"
                    value={values.address_city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.address_city ? touched.address_city && 'error' : ''
                    }`}
                  />
                </label>
                {errors.address_city && touched.address_city && (
                  <div className="input-feedback">{errors.address_city}</div>
                )}

                <label htmlFor="address_zip">
                  Postal code
                  <input
                    name="address_zip"
                    type="text"
                    id="address_zip"
                    placeholder="Postal code"
                    value={values.address_zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.address_zip ? touched.address_zip && 'error' : ''
                    }`}
                  />
                </label>
                {errors.address_zip && touched.address_zip && (
                  <div className="input-feedback">
                    {errors.address_zip && 'Only numbers please'}
                  </div>
                )}

                <label htmlFor="address_state">
                  State
                  <input
                    name="address_state"
                    type="text"
                    id="address_state"
                    placeholder="State"
                    value={values.address_state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.address_state
                        ? touched.address_state && 'error'
                        : ''
                    }`}
                  />
                </label>
                {errors.address_state && touched.address_state && (
                  <div className="input-feedback">{errors.address_state}</div>
                )}

                <label htmlFor="address_country">
                  Country
                  <input
                    name="address_country"
                    type="text"
                    id="address_country"
                    placeholder="State"
                    disabled
                    value={values.address_country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`field ${
                      errors.address_country
                        ? touched.address_country && 'error'
                        : ''
                    }`}
                  />
                </label>
              </div>
              {errors.address_country && touched.address_country && (
                <div className="input-feedback">{errors.address_country}</div>
              )}

              <div className="card-element">
                <label className="card">
                  Card number
                  <CardNumberElement options={cardStyles} />
                </label>

                <label className="expiration">
                  Expiration date
                  <CardExpiryElement options={cardStyles} />
                </label>

                <label className="cvc">
                  CVC
                  <CardCvcElement options={cardStyles} />
                </label>
              </div>

              <button type="submit" disabled={isSubmitting}>
                Place Order
              </button>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default CheckoutForm
