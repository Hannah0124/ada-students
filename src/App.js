import React, { useState } from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import NewStudentForm from './components/NewStudentForm';

const students = [
  {
    id: 1,
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
    birthday: "December 10th, 1815",
    present: true,
  },
  {
    id: 2,
    fullName: "Katherine Johnson",
    email: "kat@nasa.gove",
    birthday: "January 5th, 2000",
    present: false,
  },
  {
    id: 3,
    fullName: "Goofy",
    email: "goofy@goofy.com",
    birthday: "July 7th, 1999",
    present: true,
  }
];

function App() {
  console.log("rendering");

  const [studentList, setStudentList] = useState(students);

  const updateStudent = updatedStudent => {
    const students = []; 

    studentList.forEach(student => {
      if (student.id === updatedStudent.id) {
        students.push(updatedStudent);
      } else {
        students.push(student);
      }
    });

    setStudentList(students);
  };


  const addStudent = (student) => {
    // duplicate the student list 
    const newStudentList = [...students];

    // Find the max id and add 1 
    // ... => spread operator => to change from 'array' to ", , , ," form
    const nextId = Math.max(...newStudentList.map(student=> student.id)) + 1;

    newStudentList.push({
      id: nextId,
      fullName: student.fullName, 
      email: student.email, 
      present: false
    });

    // Change status
    setStudentList(newStudentList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada Student!</h1>
      </header>

      <main>
        <NewStudentForm 
          addStudentCallback={addStudent} // callback function
        />

        <StudentCollection 
          students={studentList} 
          onUpdateStudent={updateStudent} // callback funciton
        />
      </main>
    </div>
  );
}

export default App;
