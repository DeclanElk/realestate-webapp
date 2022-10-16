import React from 'react';
import axios from 'axios';
import Select from 'react-select'

export default function Home() {
    const [search, setSearch] = React.useState("");
    const [selectedBeds, setSelectedBeds] = React.useState('Any')
    const [selectedBaths, setSelectedBaths] = React.useState('Any')
    const [selectedGarages, setSelectedGarages] = React.useState('Any')

    //Submit function
    function submit(event) {
    }

    //Declaring select options
    const bedOptions = [
        { value: 'Any', label: 'Any'},
        { value: '1+', label: '1+'},
        { value: '2+', label: '2+'},
        { value: '3+', label: '3+'},
        { value: '4+', label: '4+'},
        { value: '5+', label: '5+'},
        { value: '6+', label: '6+'},
    ]
    const bathOptions = [
        { value: 'Any', label: 'Any'},
        { value: '1+', label: '1+'},
        { value: '2+', label: '2+'},
        { value: '3+', label: '3+'},
        { value: '4+', label: '4+'},
        { value: '5+', label: '5+'},
        { value: '6+', label: '6+'},
    ]
    const garageOptions = [
        { value: 'Any', label: 'Any'},
        { value: '1+', label: '1+'},
        { value: '2+', label: '2+'},
        { value: '3+', label: '3+'},
        { value: '4+', label: '4+'},
        { value: '5+', label: '5+'},
        { value: '6+', label: '6+'},
    ]
    
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
                        <div className="col-md-7 mt-4 mb-4 d-flex">
                        <Select 
                        className="" 
                        options={bedOptions}
                        value={{value: selectedBeds, label: selectedBeds}}
                        onChange={(event) => {
                            setSelectedBeds(event.value)
                            console.log(selectedBeds)
                        }}
                        />
                        <Select 
                        className="" 
                        options={bathOptions}
                        value={{value: selectedBaths, label: selectedBaths}}
                        onChange={(event) => {
                            setSelectedBaths(event.value)
                            console.log(selectedBaths)
                        }}
                        />
                        <Select 
                        className="" 
                        options={garageOptions}
                        value={{value: selectedGarages, label: selectedGarages}}
                        onChange={(event) => {
                            setSelectedGarages(event.value)
                            console.log(selectedGarages)
                        }}
                        />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}