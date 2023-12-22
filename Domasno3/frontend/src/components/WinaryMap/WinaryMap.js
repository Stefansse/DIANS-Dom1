// WineryMap.js
import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./WineryMap.css"; // Import a separate CSS file for styling

// Import the image for the custom marker icon
import wineIconUrl from "../Images/wine.png";

const WineryMap = ({ wineries }) => {
    useEffect(() => {
        // Initialize the map with the center and zoom level for North Macedonia
        const map = L.map("winery-map").setView([41.6086, 21.7453], 8);

        // Define the custom marker icon
        const wineIcon = L.icon({
            iconUrl: wineIconUrl,
            iconSize: [32, 32], // Adjust the size of the icon
            iconAnchor: [16, 32], // Adjust the anchor point of the icon
            popupAnchor: [0, -32], // Adjust the anchor point of the popup
        });

        // Add a tile layer (you can replace this with your preferred map provider)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        // Add markers for each winery using the custom icon
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

        // Clean up the map when the component is unmounted
        return () => {
            map.remove();
        };
    }, [wineries]);

    return <div id="winery-map" className="map-container" />;
};

export default WineryMap;
