package com.example.winarriesapp.filter;

import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.service.Filter;

public class RemoveRegisterNumberFilter implements Filter<Winery> {

    @Override
    public Winery execute(Winery input) {

//        if (input != null) {
//            input.setRegistrationNumber(null);
//        }
        return input;
    }
}
