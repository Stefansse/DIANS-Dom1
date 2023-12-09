package com.example.winarriesapp.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class WineryNotFoundException extends RuntimeException{
    public WineryNotFoundException(Long id) {
        super(String.format("Winery with id: %d is not found", id));
    }
}
