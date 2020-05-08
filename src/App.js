import React, { useState } from 'react';
import UserForm from './components/userForm';
import OutputForm from './components/outputForm';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [users, setUsers] = useState([]) 


  return (
    <div className="App">
        <UserForm state={state} setState={setState}  users={users} setUsers={setUsers}/>
        <OutputForm state={state} users={users}/>
    </div>

  );
}


export default App;
