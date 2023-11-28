package com.example.winarriesapp.filter;



import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.service.Filter;

public class RemoveInvalidCoordinatesFilter implements Filter<Winery> {

    @Override
    public Winery execute(Winery input) {
        if (input != null && isValidCoordinates(input.getLatitude(), input.getLongitude())) {
            return input;
        }
        return null; // Skip wineries with invalid coordinates
    }

    private boolean isValidCoordinates(double latitude, double longitude) {
        // Add logic to validate coordinates (e.g., check range)
        return latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180;
    }
}
