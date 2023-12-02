import axios from '../custom-axios/axios';

const WineryService = {

    fetchWineries: () => {
        return axios.get("/wineries");
    },

    deleteWinery: (id) => {
        return axios.delete(`/wineries/delete/${id}`);
    },

    addWinery: (locationName, coordinates, latitude, longitude, registrationNumber, name) => {
        return axios.post("/wineries/add", {
                "locationName" : locationName,
                "coordinates" : coordinates,
                "latitude" : latitude,
                "longitude" : longitude,
                "registrationNumber" : registrationNumber,
                "name" : name
        })
    },

    editWinery: (id, locationName, coordinates, latitude, longitude, registrationNumber, name) => {
            return axios.put(`/wineries/edit/${id}`, {
                "locationName" : locationName,
                "coordinates" : coordinates,
                "latitude" : latitude,
                "longitude" : longitude,
                "registrationNumber" : registrationNumber,
                "name" : name
            })
    },

    getWinery: (id) => {
        return axios.get(`/wineries/${id}`);
    }

}

export default WineryService;