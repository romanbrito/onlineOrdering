import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {login} from '../../lib/auth'
import useAuthState from '../../hooks/useAuthState'
import {formStyles} from './LoginForm-styles'

const ValidatedLoginForm = () => {
  const {
    state: {user},
    setState,
  } = useAuthState()

  return (
    !user && (
      <div css={formStyles}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={async (values, {setSubmitting}) => {
            // setTimeout(() => {
            //   console.log('logging in', values)
            //   setSubmitting(false)
            // }, 500)
            const {user} = await login(values)
            setState({
              status: 'success',
              error: null,
              user,
            })
            setSubmitting(false)
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required('Required'),
            password: Yup.string()
              .required('No password provided.')
              .min(8, 'Password is too short -should be 8 chars minimum.'),
            // .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
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
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && 'error'}
                />

                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <label htmlFor="email">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && 'error'}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </form>
            )
          }}
        </Formik>
      </div>
    )
  )
}

export default ValidatedLoginForm
