import React from 'react';

export default function Login() {
    return (
        <div className='container text-center mt-5 p-5'>
            <h1>Login</h1>
            <form>
                <div className='form-group row d-flex justify-content-center'>
                    <div className="col-md-7 mb-3 mt-5">
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                </div>
                <div className='form-group row d-flex justify-content-center'>
                    <div className="col-md-7 mb-5">
                        <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary px-4 py-2">Submit</button>
            </form>
        </div>
    )
}