import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {signup} from '../../lib/auth'
import useAuthState from '../../hooks/useAuthState'
import {formStyles} from './SignUpForm-styles'

// todo: add first name, last name, address, telephone, etc.
const ValidatedSignUpForm = ({signIn}) => {
  const {
    state: {user},
    setState,
  } = useAuthState()

  return (
    !user &&
    !signIn && (
      <div css={formStyles}>
        <Formik
          initialValues={{email: '', password: '', username: ''}}
          onSubmit={async (values, {setSubmitting}) => {
            // setTimeout(() => {
            //   console.log('logging in', values)
            //   setSubmitting(false)
            // }, 500)
            const {user} = await signup(values)
            setState({
              status: 'success',
              error: null,
              user,
            })
            setSubmitting(false)
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required('Required'),
            username: Yup.string().required('Required'),
            password: Yup.string()
              .required('No password provided.')
              .min(8, 'Password is too short -should be 8 chars minimum.')
              .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
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

                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.username && touched.username && 'error'}
                />

                {errors.username && touched.username && (
                  <div className="input-feedback">{errors.username}</div>
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

export default ValidatedSignUpForm
