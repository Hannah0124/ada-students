import React from "react";
import Student from "./Student";
import PropTypes from "prop-types";

const StudentCollection = ({students, onUpdateStudent, addStudentCallback}) => {
  
  const studentComponents = students.map((student) => {
    return (
      // key can be a number or string
      <section key={student.id}>
        <Student 
          fullName={ student.fullName } 
          email={ student.email } 
          birthday={ student.birthday }
          present={ student.present }
          id={ student.id }
          onUpdateStudent={ onUpdateStudent }
        />
      </section>
    );
  });


  // callback function to add students to the list 

  return (
    <section className="student-collection">
      {studentComponents}
    </section>
  );
};

StudentCollection.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      birthday: PropTypes.string,
      email: PropTypes.string,
      present: PropTypes.bool,
      id: PropTypes.number.isRequired
    })
  ),
  onUpdateStudent: PropTypes.func.isRequired,
}
export default StudentCollection;