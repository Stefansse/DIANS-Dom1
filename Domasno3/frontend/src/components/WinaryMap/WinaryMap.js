// WineryMap.js
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./WineryMap.css";


import wineIconUrl from "../Images/wine.png";

const WineryMap = ({ wineries }) => {
    useEffect(() => {

        const map = L.map("winery-map").setView([41.6086, 21.7453], 8);

        // Define the custom marker icon
        const wineIcon = L.icon({
            iconUrl: wineIconUrl,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        });


        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);


        wineries.forEach((winery) => {
            const { latitude, longitude, name, locationName, registrationNumber } = winery;

            if (latitude && longitude) {
                L.marker([latitude, longitude], { icon: wineIcon })
                    .addTo(map)
                    .bindPopup(
                        `<b>${name}</b><br/>Location: ${locationName}<br/>Registration Number: ${registrationNumber}`
                    );
            }
        });


        return () => {
            map.remove();
        };
    }, [wineries]);

    return <div id="winery-map" className="map-container" />;
};

export default WineryMap;
