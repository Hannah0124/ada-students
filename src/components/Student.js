// final version of code: https://codesandbox.io/s/ada-students-nested-components-with-state-nv7l0
import React from 'react';
import PropTypes from  'prop-types';
import './Student.css'

const Student = (props) => {

  const onButtonClick = () => {
    const updatedStudent = {
      fullName: props.fullName, 
      birthday: props.birthday,
      email: props.email,
      present: !props.present,
      id: props.id,
    }

    // call the function passed from 'App'
    props.onUpdateStudent(updatedStudent);
  }

  const onFullNameInputChange = event => {
    const fullName = event.target.value;

    props.onUpdateStudent({
      fullName,
      birthday: props.birthday,
      email: props.email, 
      present: props.present,
      id: props.id
    })
  };


  return (
    <div className="student">
      <h3 className={props.present ? 'present' : 'absent'}>{props.fullName}</h3>
      <input value={props.fullName} onChange={onFullNameInputChange}/>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: {props.birthday}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onButtonClick}>
        Mark {props.present ? 'Present' : 'Absent'}
      </button> 
    </div>
  );
};

Student.propTypes = {
  fullName: PropTypes.string.isRequired, 
  email: PropTypes.string,
  birthday: PropTypes.string,
  id: PropTypes.number,
  present: PropTypes.bool.isRequired
};

Student.defaultProps = {
  birthday: "no birthday on file"
};


export default Student;