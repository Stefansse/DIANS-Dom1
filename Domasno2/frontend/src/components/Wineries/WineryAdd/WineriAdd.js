import React from "react";
import {useNavigate} from 'react-router-dom'

const WineriAdd = (props) => {

    const history = useNavigate();

    const [formData, updateFormData] = React.useState({
        locationName: "",
        coordinates: "",
        latitude: 0,
        longitude: 0,
        registrationNumber: "",
        name: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        updateFormData({
            ...formData,
            [name]: typeof value === 'string' ? value.trim() : value
        });
    };


    const onFormSubmit = (e) => {
        e.preventDefault();
        const locationName =formData.locationName;
        const coordinates = formData.coordinates;
        const latitude = formData.latitude;
        const longitude = formData.longitude;
        const registrationNumber = formData.registrationNumber;
        const name = formData.name;

        props.onAddWinery(locationName, coordinates, latitude, longitude, registrationNumber, name)
        history('/wineries');

    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="locationName">Location</label>
                        <input type="text"
                               className="form-control"
                               id="locationName"
                               name="locationName"
                               required
                               placeholder="Enter location name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="coordinates">Coordinates</label>
                        <input type="text"
                               className="form-control"
                               id="coordinates"
                               name="coordinates"
                               placeholder="Coordinates"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="latitude">Latitude</label>
                        <input type="text"
                               className="form-control"
                               id="latitude"
                               name="latitude"
                               placeholder="Latitude"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="longitude">Longitude</label>
                        <input type="text"
                               className="form-control"
                               id="longitude"
                               name="longitude"
                               placeholder="Longitude"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="registrationNumber">RegistrationNumber</label>
                        <input type="text"
                               className="form-control"
                               id="registrationNumber"
                               name="registrationNumber"
                               placeholder="RegistrationNumber"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Winery Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="WineryName"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )


}

export default WineriAdd;