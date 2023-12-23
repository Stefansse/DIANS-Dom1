package com.example.winarriesapp.filters;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;

@Getter
public class WineryFilter {
    private String name;
    private String location;

    @JsonSetter("name")
    public void setName(String name) {
        this.name = name == null ? name : name.toLowerCase();
    }

    @JsonSetter("location")
    public void setLocation(String location) {
        this.location = location == null ? location : location.toLowerCase();
    }

}
