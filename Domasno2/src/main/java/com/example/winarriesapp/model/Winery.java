package com.example.winarriesapp.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "winary", schema = "winary")
public class Winery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "registration_number")
    String registrationNumber;
    String name;
    @Column(name = "location_name")
    private String locationName;

    private String coordinates;

    private Double latitude;

    private Double longitude;


    public Winery(String registrationNumber, String name, String locationName, String coordinates, Double latitude, Double longitude) {
        this.registrationNumber = registrationNumber;
        this.name = name;
        this.locationName = locationName;
        this.coordinates = coordinates;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Winery() {

    }





}
