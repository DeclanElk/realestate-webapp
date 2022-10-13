import React from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const { setUser, setToken } = React.useContext(UserContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const navigate = useNavigate();

    const registerUrl = `${process.env.REACT_APP_BACKEND_URL}/auth/local/register` 

    //Submit function
    function submit(event) {
        setError("");
        setSuccess(false);
        axios
        .post(registerUrl, {
            username: email,
            email: email,
            password: password,
            name: name
        })
        .then((res) => {
            setUser(res.data.user);
            setToken(res.data.jwt);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', JSON.stringify(res.data.jwt));
            setSuccess(true);
        })
        .catch(error => {
            setError(`Unable to register: ${error.response.data.error.message}`)
        })
        event.preventDefault();
    }

    return (
        <div className='container text-center mt-5 p-5'>
            <h1>Register</h1>
            <div className="row d-flex justify-content-center mt-5">
                { error ? 
                <div className="alert alert-danger col-md-7" role="alert">
                    {error}
                </div>
                : null}
                { success ? 
                <div className="alert alert-success col-md-7" role="alert">
                    Successfully registered and signed in, view your new account <a href="/account">here</a>.
                </div>
                : null}
            </div>
            <form onSubmit={submit}>
                <div className='form-group row d-flex justify-content-center'>
                    <div className="col-md-7 mt-4 mb-4">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name" 
                        name="name" 
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}/>
                        <input 
                        type="email" 
                        className="form-control mt-4" 
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
                        <p className="mt-4 text-start">Already a member? <a href='/login'>Login now</a></p>
                    </div>
                </div>
                <button 
                type="submit" 
                onClick={submit} 
                className={name && email && password ? "btn btn-primary px-4 py-2" : "btn btn-primary px-4 py-2 disabled"} 
                value="Submit">
                    Register
                </button>
            </form>
        </div>
    )
}