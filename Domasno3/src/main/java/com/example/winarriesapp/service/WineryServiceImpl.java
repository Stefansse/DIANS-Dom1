package com.example.winarriesapp.service;

import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.model.dto.WineryDto;
import com.example.winarriesapp.model.exceptions.WineryNotFoundException;
import com.example.winarriesapp.repository.WineryRepository;
import com.example.winarriesapp.service.WineryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class WineryServiceImpl implements WineryService {

    private final WineryRepository wineryRepository;


    @Override
    public List<Winery> listWineries() {
        return this.wineryRepository.findAll();
    }

    @Override
    public Optional<Winery> findById(Long id) {
        return this.wineryRepository.findById(id);
    }

    @Override
    public Optional<Winery> findByName(String name) {
        return this.wineryRepository.findByName(name);
    }

    @Override
    public Optional<Winery> save(WineryDto wineryDto) {

        this.wineryRepository.deleteByName(wineryDto.getName());
        Winery winery = new Winery(wineryDto.getRegistrationNumber(), wineryDto.getName(),
                wineryDto.getLocationName(), wineryDto.getCoordinates(),
                wineryDto.getLatitude(), wineryDto.getLongitude());
        this.wineryRepository.save(winery);
        return Optional.of(winery);

    }

    @Override
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

    @Override
    public void deleteById(Long id) {
        this.wineryRepository.deleteById(id);
    }

    @Override
    public List<Winery> filterWineries(String locationName, String wineryName) {
        Specification<Winery> spec = Specification.where(null);

        if (locationName != null && !locationName.isEmpty()) {
            spec = spec.and((root, query, cb) ->
                    cb.like(cb.lower(root.get("locationName")), "%" + locationName.toLowerCase() + "%"));
        }

        if (wineryName != null && !wineryName.isEmpty()) {
            spec = spec.and((root, query, cb) ->
                    cb.like(cb.lower(root.get("name")), "%" + wineryName.toLowerCase() + "%"));
        }

        return wineryRepository.findAll(spec);
    }

}