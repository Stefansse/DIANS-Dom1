package com.example.winarriesapp.service;

import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.model.dto.WineryDto;

import java.util.List;
import java.util.Optional;

public interface WineryService {
    List<Winery> listWineries();

    Optional<Winery> findById(Long id);

    Optional<Winery> findByName(String name);

    Optional<Winery> save(WineryDto wineryDto);

    Optional<Winery> edit(Long id, WineryDto wineryDto);

    void deleteById(Long id);

    // New method for filtering
    List<Winery> filterWineries(String locationName, String wineryName);
}
