import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons'

import background from '../assets/background.jpg';

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
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 25%'
                }}>
                <h1 className='display pt-5 pb-3 text-center font-weight fw-light'>
                    Don't wait to find your dream property
                </h1>
                <form onSubmit={submit}>
                    <div className='container'>
                        <div className='form-group row d-flex justify-content-center'>
                            <div className="col-lg-7 mt-4 mb-4 d-flex">
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
                        <div className='form-group row d-flex justify-content-center'>
                            <div className="col-lg-7 mt-4 mb-4 d-flex align-items-center">
                                <label htmlFor="bedSelect" className='me-2 bg-light p-1 rounded'>
                                    <FontAwesomeIcon icon={faBed} className="text-dark" size="xl"/>
                                </label>
                                <Select 
                                id="bedSelect"
                                className="ms-2 me-4" 
                                options={bedOptions}
                                value={{value: selectedBeds, label: selectedBeds}}
                                onChange={(event) => {
                                    setSelectedBeds(event.value)
                                    console.log(selectedBeds)
                                }}
                                />
                                <label htmlFor="bathSelect" className='mx-2 bg-light p-1 rounded'>
                                    <FontAwesomeIcon icon={faBath} className="text-dark" size="xl"/>
                                </label>
                                <Select 
                                id="bathSelect"
                                className="ms-2 me-4" 
                                options={bathOptions}
                                value={{value: selectedBaths, label: selectedBaths}}
                                onChange={(event) => {
                                    setSelectedBaths(event.value)
                                    console.log(selectedBaths)
                                }}
                                />
                                <label htmlFor="garageSelect" className='mx-2 bg-light p-1 rounded'>
                                    <FontAwesomeIcon icon={faCar} className="text-dark" size="xl"/>
                                </label>
                                <Select 
                                id="garageSelect"
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
                    </div>
                </form>
            </div>
        </div>
    )
}