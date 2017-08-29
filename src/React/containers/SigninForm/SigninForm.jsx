import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { localSignIn } from '../../../Redux/authentication'
import store from '../../../Redux'

/* renderField is a functional component, that renders an input in a 
* redux-form
*
*/
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <div className="input-wrapper">
        <input type={type} {...input} />
        {
          touched && ((error && <span>*{error}</span>))
        }
      </div>
    </div>
  )
}

/* template to my form before its wrapped in a redux-form HOC
*
*/
const SigninForm = props => {
  const { handleSubmit, signinHandler, reset } = props
  // const signInHandler = function (formData) {
  //   console.log(formData)
  //   debugger
  // }
  // V1!
  // const handleSubmitWrapper = function(formData) {
  //   signinHandler(formData)
  //   debugger
  //   reset()
  // }
  // <form onSubmit={handleSubmit(handleSubmitWrapper)}>
  return (
    <div className="SigninForm">
      <form onSubmit={handleSubmit(signinHandler)}>
        <Field name="username" label="username" type="text" component={renderField} />
        <Field name="password" label="password" type="password" component={renderField} />
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  )
}

/* export a redux-form HOC
*
*/
export default reduxForm({
  form: 'signin'
})(SigninForm)