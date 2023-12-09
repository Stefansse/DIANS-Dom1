import React from "react";
import {useNavigate} from 'react-router-dom'

const WineryEdit = (props) => {
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
        const locationName =formData.locationName !== "" ? formData.locationName: props.winery.locationName;
        const coordinates = formData.coordinates !== "" ? formData.coordinates: props.winery.coordinates;
        const latitude = formData.latitude !== 0 ? formData.latitude: props.winery.latitude;
        const longitude = formData.longitude !== 0 ? formData.longitude: props.winery.longitude;
        const registrationNumber = formData.registrationNumber !== "" ? formData.registrationNumber: props.winery.registrationNumber;
        const name = formData.name !== "" ? formData.name: props.winery.name;

        props.onEditWinery(props.winery.id, locationName, coordinates, latitude, longitude, registrationNumber, name)
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
                               placeholder={props.winery.locationName}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="coordinates">Coordinates</label>
                        <input type="text"
                               className="form-control"
                               id="coordinates"
                               name="coordinates"
                               required
                               placeholder={props.winery.coordinates}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="latitude">Latitude</label>
                        <input type="text"
                               className="form-control"
                               id="latitude"
                               name="latitude"
                               required
                               placeholder={props.winery.latitude}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="longitude">Longitude</label>
                        <input type="text"
                               className="form-control"
                               id="longitude"
                               name="longitude"
                               required
                               placeholder={props.winery.longitude}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="registrationNumber">RegistrationNumber</label>
                        <input type="text"
                               className="form-control"
                               id="registrationNumber"
                               name="registrationNumber"
                               required
                               placeholder={props.winery.registrationNumber}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Winery Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.winery.name}
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default WineryEdit;