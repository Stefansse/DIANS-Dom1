package com.example.winarriesapp.repository;

import com.example.winarriesapp.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WineryRepository extends JpaRepository<Winery, Long> {
    Optional<Winery> findByName(String name);

    void deleteByName(String name);
}