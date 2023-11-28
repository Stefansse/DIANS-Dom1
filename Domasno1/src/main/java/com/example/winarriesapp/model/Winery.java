package com.example.winarriesapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Winery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String location;
    String registrationNumber;
    String name;
    String coordinates;
    Double latitude;
    Double longitude;

    public Winery(String location, String registrationNumber, String name, String coordinates, Double latitude, Double longitude) {
        this.location = location;
        this.registrationNumber = registrationNumber;
        this.name = name;
        this.coordinates = coordinates;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Winery() {

    }



    public static Winery createWineryFromCsvLine(String line) {
        String[] columns = line.split("\\t");


        if (columns.length < 6) {

            return null;
        }

        Winery winery = new Winery();
        winery.setLocation(columns[0].trim());
        winery.setRegistrationNumber(columns[1].trim());
        winery.setName(columns[2].trim());
        winery.setCoordinates(columns[3].trim());

        try {
            winery.setLatitude(Double.parseDouble(columns[4].trim()));
            winery.setLongitude(Double.parseDouble(columns[5].trim()));
        } catch (NumberFormatException e) {

        }

        return winery;
    }

}
