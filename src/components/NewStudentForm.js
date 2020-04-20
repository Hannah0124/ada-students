import React, { useState } from 'react';
import './NewStudentForm.css';
// import Student from './Student';
import PropTypes from 'prop-types';


const NewStudentForm = (props) => {

  // track full name and email state
  const [formFields, setFormFields] = useState({
    fullName: '',
    email: '',
  });

  // event handler 
  const onNameChange = (event) => {
    console.log(`Name Field updated ${ event.target.value }`); 
    setFormFields({
      ...formFields,
      fullName: event.target.value,
      // email: formFields.email
    });
  };

  const onEmailChange = (event) => {
    console.log(`Email Field updated ${ event.target.value }`);
    setFormFields({
      ...formFields,
      // fullName: formFields.fullName,
      email: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    // prevent the browser from trying to submit the form
    event.preventDefault();

    console.log("submitting form");

    if (formFields.fullName !== '' && formFields.email !== '') {
      // We need to add the student to the list 
      props.addStudentCallback(formFields); 

      setFormFields({
        fullName: '',
        email: '',
      });
    }
  };

  return (
    <form 
      className="new-studnet-form" 
      onSubmit={onFormSubmit}
    >
      <div>
        <label htmlFor="fullName">Name:</label>
        <input 
          name="fullName" 
          onChange={onNameChange}
          value={formFields.fullName}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input 
          name="email"
          onChange={onEmailChange}
          value={formFields.email}
        />
      </div>
      <input type="submit" value="Add Student" />
    </form>
  );
}

NewStudentForm.propTypes = {
  addStudentCallback: PropTypes.func.isRequired,
};

export default NewStudentForm;