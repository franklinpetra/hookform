import React, { useState } from 'react';
    
    
const UserForm = (props) => {
    const {state, setState} = props 
    const {users, setUsers} = props
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  

    // const onChange = e => {
    //     setInputs(() => {
    //         ...inputs,
    //         [e.target.name]: e.target.value
    //     });
    // }
    const createUser = (e) => {
        e.preventDefault();
        console.log("Your Form Data");
        setState({ firstName:firstName, lastName:lastName, email:email, password:password, confirmPassword:confirmPassword })
        setUsers(users.concat(state))
    };

    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } value = {firstName} />
            </div>
            
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } value = {lastName} />
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } value = {email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ (e) => setPassword(e.target.value) } value = {password} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) } value = {confirmPassword} />
            </div>
            <input type="submit" value="Create User" />
        </form>
   );
}
    
export default UserForm;