import React from'react';

const OutputForm = (props) =>{
    const { firstName, lastName, email, password, confirmPassword } = props.state;
    return(
        <div>
            <h2>Results</h2>
            <p> First Name: = {firstName} </p>
            <p> Last Name: = {lastName} </p>
            <p> Email: = {email} </p>
            <p> Password: = {password} </p>
            <p> Confirm Password: = {confirmPassword} </p>
        </div>
    );
};

export default OutputForm;