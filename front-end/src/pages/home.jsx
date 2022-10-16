import React from 'react';
import axios from 'axios';

export default function Home() {
    const [search, setSearch] = React.useState("");

    //Submit function
    function submit(event) {
    }
    
    return(
        <div>
            <div
            className='bg-image py-5'
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1495442358998-961b69f45703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
                <h1 className='display pt-5 pb-3 text-center font-weight fw-light'>
                    Don't wait to find your dream property
                </h1>
                <form onSubmit={submit}>
                <div className='form-group row d-flex justify-content-center'>
                    <div className="col-md-7 mt-4 mb-4 d-flex">
                        <input 
                        type="text" 
                        className="form-control me-2" 
                        id="search" 
                        placeholder="Enter search" 
                        name="search" 
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}/>
                        <button 
                        type="submit" 
                        onClick={submit} 
                        className="btn btn-primary px-4 py-2 btn-dark"
                        value="Submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}