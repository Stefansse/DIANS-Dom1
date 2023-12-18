package com.example.winarriesapp.repository;

import com.example.winarriesapp.filters.WineryFilter;
import com.example.winarriesapp.model.Winery;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface WineryRepository extends JpaRepository<Winery, Long> {
    Optional<Winery> findByName(String name);

    void deleteByName(String name);

    @Query("SELECT w FROM Winery w WHERE " +
            "(:#{#wineryFilter.name == null ? true : #wineryFilter.name.isEmpty()} = true OR LOWER(w.name) LIKE %:#{#wineryFilter.name}%) AND " +
            "(:#{#wineryFilter.location == null ? true : #wineryFilter.location.isEmpty()} = true OR LOWER(w.locationName) LIKE %:#{#wineryFilter.location}%)")
    Page<Winery> findWithFilterAndPaging(Pageable pageable, @Param("wineryFilter") WineryFilter wineryFilter);
}