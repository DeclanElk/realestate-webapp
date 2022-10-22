import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Property() {
    const { propertyId } = useParams();
    const [property, setProperty] = React.useState(null);
    const [error, setError] = React.useState(null);

    const url = `${process.env.REACT_APP_BACKEND_URL}/properties/${propertyId}?populate=*`

    React.useEffect(() => {
        axios
        .get(url)
        .then((response) => {
            console.log(response)
            setProperty(response.data.data.attributes)
        })
        .catch((error) => {
            setError(`Unable to login: ${error.response.data.error.message}`)
        })
    }, [url])

    //Handle error
    if (property !== null && !error) {
        return(
            <div className='container my-2'>
                <h1 className='my-4'>{property.address}</h1>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        {property.photos.data.map((photo, i) => {
                            return (
                                <div className={i === 0 ? "carousel-item" : "carousel-item active"} key={`Slide ${i}`}>
                                    <img className="d-block w-100" src={`${process.env.REACT_APP_MEDIA_URL}${photo.attributes.url}`} alt={`Slide ${i}`} />
                                </div>
                            )
                        })}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className='container mt-2'>
                <h1 className='mt-4'>An error has occured</h1> 
            </div>
        )
    }
}