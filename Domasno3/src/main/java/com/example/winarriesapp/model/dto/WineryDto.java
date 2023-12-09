package com.example.winarriesapp.model.dto;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.Getter;

@Getter
public class WineryDto {

    private String registrationNumber;

    private String name;

    private String locationName;

    private String coordinates;

    private Double latitude;

    private Double longitude;



}
