package com.example.winarriesapp.controller;

import com.example.winarriesapp.filters.WineryFilter;
import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.model.dto.WineryDto;
import com.example.winarriesapp.service.WineryService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/wineries")
public class WineryRestController {

    private final WineryService wineryService;

    public WineryRestController(WineryService wineryService) {
        this.wineryService = wineryService;
    }

    @GetMapping("/filter")
    public List<Winery> filterWineries(
            @RequestParam(required = false) String locationName,
            @RequestParam(required = false) String wineryName,
            @RequestParam(required = false) String size,
            @RequestParam(required = false) String page) {
        return wineryService.filterWineries(locationName, wineryName);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Winery> findById(@PathVariable Long id) {
        return this.wineryService.findById(id)
                .map(winery -> ResponseEntity.ok().body(winery))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Winery> save(@RequestBody WineryDto wineryDto) {
        return this.wineryService.save(wineryDto)
                .map(winery -> ResponseEntity.ok().body(winery))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Winery> save(@PathVariable Long id, @RequestBody WineryDto wineryDto) {
        return this.wineryService.edit(id, wineryDto)
                .map(winery -> ResponseEntity.ok().body(winery))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.wineryService.deleteById(id);
        if(this.wineryService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }


}
