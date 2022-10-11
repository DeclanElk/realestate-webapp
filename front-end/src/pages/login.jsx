import React from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';

export default function Login() {
    const { setUser, setToken } = React.useContext(UserContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const loginUrl = `${process.env.REACT_APP_BACKEND_URL}/auth/local` 

    //Submit function
    function submit(event) {
        axios
        .post(loginUrl, {
            identifier: email,
            password: password
        })
        .then((res) => {
            setUser(res.data.user);
            setToken(res.data.jwt);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', JSON.stringify(res.data.jwt));
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
                    <div className="col-md-7 mt-5 mb-4">
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
                        <input 
                        type="password" 
                        className="form-control mt-4" 
                        id="password" 
                        placeholder="Enter password" 
                        name="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}/>
                        <p className="mt-4 text-start">Not yet a member? <a href='/register'>Register now</a></p>
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