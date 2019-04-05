/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';

import { RFTextField } from 'components/ReduxFormFields/RFTextField';

class WelcomeForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;

    return (
      //handleSubmit works the same without this.props.onSubmit
      <form onSubmit={handleSubmit(this.props.onSubmit)} className="flex flex-column">
        
        <Field
          name="firstname"
          component={RFTextField}
          label="First Name"
        />
        <Field
          name="lastname"
          component={RFTextField}
          label="Last Name"
        />
        <Field
          name="username"
          component={RFTextField}
          label="User Name"
        />
        <div className="center mt3">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

WelcomeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

//validates that value is entered in text fields
const validate = values => {
  console.log(values);
  const { firstname, lastname, username } = values;
  
	const error = {};
	if(!values.get('firstname') || values.get('firstname').trim() ===''){
		error.firstname = 'firstname Required';
  }
  
  if(!values.get('lastname') || values.get('lastname').trim() ===''){
		error.lastname = 'lastname Required';
  }
  if(!values.get('username') || values.get('username').trim() ===''){
		error.username = 'username Required';
  }
		
		return error;
}


// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
