package com.example.winarriesapp.service;

import com.example.winarriesapp.filters.WineryFilter;
import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.model.dto.WineryDto;
import com.example.winarriesapp.model.exceptions.WineryNotFoundException;
import com.example.winarriesapp.repository.WineryRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WineryService {

    private final WineryRepository wineryRepository;



    public Page<Winery> listWineries(Integer pageSize, Integer pageNumber, WineryFilter wineryFilter) {
        Pageable pageable = PageRequest.of(pageNumber,pageSize);
        return this.wineryRepository.findWithFilterAndPaging(pageable,wineryFilter);
    }


    public Optional<Winery> findById(Long id) {
        return this.wineryRepository.findById(id);
    }


    public Optional<Winery> findByName(String name) {
        return this.wineryRepository.findByName(name);
    }


    public Optional<Winery> save(WineryDto wineryDto) {

        this.wineryRepository.deleteByName(wineryDto.getName());
        Winery winery = new Winery(wineryDto.getRegistrationNumber(), wineryDto.getName(),
                wineryDto.getLocationName(), wineryDto.getCoordinates(),
                wineryDto.getLatitude(), wineryDto.getLongitude());
        this.wineryRepository.save(winery);
        return Optional.of(winery);

    }


    public Optional<Winery> edit(Long id, WineryDto wineryDto) {
        Winery winery = this.wineryRepository.findById(id).orElseThrow(() -> new WineryNotFoundException(id));
        winery.setName(wineryDto.getName());
        winery.setRegistrationNumber(wineryDto.getRegistrationNumber());
        winery.setCoordinates(wineryDto.getCoordinates());
        winery.setLatitude(winery.getLatitude());
        winery.setLongitude(winery.getLongitude());
        winery.setLocationName(wineryDto.getLocationName());
        this.wineryRepository.save(winery);
        return Optional.of(winery);
    }


    public void deleteById(Long id) {
        this.wineryRepository.deleteById(id);
    }
}
