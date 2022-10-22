import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Property() {
    const { propertyId } = useParams();

    const url = `${`${process.env.REACT_APP_BACKEND_URL}/properties/${propertyId}`}`

    React.useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(`Unable to login: ${error.response.data.error.message}`)
        })
    }, [url])

    return(
        <h1>Testing Property page</h1>
    )
}