package com.example.winarriesapp.repository;

import com.example.winarriesapp.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WineryRepository extends JpaRepository<Winery, Long> {
}