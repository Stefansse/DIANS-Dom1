package com.example.winarriesapp.service.controller;

import com.example.winarriesapp.filters.WineryFilter;
import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.model.dto.WineryDto;
import com.example.winarriesapp.service.WineryService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/wineries")
public class WineryRestController {

    private final WineryService wineryService;

    public WineryRestController(WineryService wineryService) {
        this.wineryService = wineryService;
    }

    @GetMapping
    private Page<Winery> findAll(@RequestParam(defaultValue = "10") Integer pageSize, @RequestParam(defaultValue = "0") Integer pageNumber,@RequestBody WineryFilter wineryFilter) {
        return this.wineryService.listWineries(pageSize,pageNumber,wineryFilter);
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
