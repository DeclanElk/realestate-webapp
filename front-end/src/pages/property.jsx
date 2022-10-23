import React from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar, faHouse, faWarehouse, faBuilding, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Property() {
    const { propertyId } = useParams();
    const [property, setProperty] = React.useState(null);
    const [error, setError] = React.useState(null);

    const url = `${process.env.REACT_APP_BACKEND_URL}/properties/${propertyId}?populate=*`

    React.useEffect(() => {
        axios
        .get(url)
        .then((response) => {
            setProperty(response.data.data.attributes)
        })
        .catch((error) => {
            setError(`Unable to login: ${error.response.data.error.message}`)
        })
    }, [url])

    //Select icon for property type
    let typeIcon = null
    if (property) {
        switch (property.type) {
            case 'House':
                typeIcon = faHouse
                break;
            case 'Apartment':
                typeIcon = faBuilding
                break;
            case 'Townhouse':
                typeIcon = faWarehouse
                break;
            default:
                typeIcon = faMapLocationDot
                break;
        }
    }

    //Render response based on error
    if (property !== null && !error) {
        return(
            <div className='container my-2'>
                <h1 className='my-4'>{property.address}</h1>
                <div id="carousel" className="carousel slide mb-3" data-bs-interval="false">
                    <div className="carousel-inner">
                        {property.photos.data.map((photo, i) => {
                            return (
                                <div className={i === 0 ? "carousel-item" : "carousel-item active"} key={`Slide ${i}`}>
                                    <img style={{maxHeight: "75vh"}} className="d-block w-100" src={`${process.env.REACT_APP_MEDIA_URL}${photo.attributes.url}`} alt={`Slide ${i}`} />
                                </div>
                            )
                        })}
                        {property.floorplan ? 
                        <div className="carousel-item">
                            <img style={{maxHeight: "75vh"}} className="d-block w-100" src={`${process.env.REACT_APP_MEDIA_URL}${property.floorplan.data.attributes.url}`} alt={`Floorplan`} />
                        </div>
                        : null }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="d-flex align-items-center">
                    <p className='me-auto mb-0 fw-bold'>{property.type} {typeIcon ? <FontAwesomeIcon icon={typeIcon} className="text-dark ms-1" /> : null}</p>
                    <p className='me-4 mb-0'><FontAwesomeIcon icon={faBed} className="text-dark me-2" />{property.bedrooms}</p>
                    <p className='me-4 mb-0'><FontAwesomeIcon icon={faBath} className="text-dark me-2" />{property.bathrooms}</p>
                    <p className='me-2 mb-0'><FontAwesomeIcon icon={faCar} className="text-dark me-2" />{property.garages}</p>
                </div>
                <div className='my-4'>
                    {property.description.split('\n').map((line, i) => {
                        return (
                            <p key={`Line ${i}`}>
                                {line}
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return(
            <div className='container'>
                <h1 className='mt-4'>An error has occured</h1> 
            </div>
        )
    }
}