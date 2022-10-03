import React from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    //Submit function
    function submit(event) {
        console.log('test')
        axios
        .post('http://localhost:1337/api/auth/local', {
            identifier: email,
            password: password
        })
        .then(response => {
            console.log("Successfully logged in")
        })
        .catch(error => {
            console.log("An error has occurred:", error.response)
        })
        event.preventDefault();
    }

    return (
        <div className='container text-center mt-5 p-5'>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className='form-group row d-flex justify-content-center'>
                    <div className="col-md-7 mb-3 mt-5">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter email" 
                        name="email" 
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                    </div>
                </div>
                <div className='form-group row d-flex justify-content-center'>
                    <div className="col-md-7 mb-5">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter password" 
                        name="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}/>
                    </div>
                </div>
                <button 
                type="submit" 
                onClick={submit} 
                className="btn btn-primary px-4 py-2" 
                value="Submit">
                    Submit
                </button>
            </form>
        </div>
    )
}