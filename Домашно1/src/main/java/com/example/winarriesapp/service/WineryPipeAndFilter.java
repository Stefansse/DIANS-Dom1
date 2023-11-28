package com.example.winarriesapp.service;

import com.example.winarriesapp.filter.RemoveInvalidCoordinatesFilter;
import com.example.winarriesapp.filter.RemoveRegisterNumberFilter;
import com.example.winarriesapp.model.Winery;
import com.example.winarriesapp.repository.WineryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

@SpringBootApplication
public class WineryPipeAndFilter {

    @Autowired
    private WineryRepository wineryRepository;

    public static void main(String[] args) {
        SpringApplication.run(WineryPipeAndFilter.class, args);
    }

    @Bean
    public CommandLineRunner loadData() {
        return (args) -> {
            ClassLoader loader = WineryPipeAndFilter.class.getClassLoader();
            Scanner scanner = new Scanner(new File(loader.getResource("wineries.csv").getFile()));

            Pipe<Winery> wineryPipe = new Pipe<>();
            RemoveRegisterNumberFilter removeRegisterNumberFilter = new RemoveRegisterNumberFilter();
            RemoveInvalidCoordinatesFilter removeInvalidCoordinatesFilter = new RemoveInvalidCoordinatesFilter();
            wineryPipe.addFilter(removeRegisterNumberFilter);
            wineryPipe.addFilter(removeInvalidCoordinatesFilter);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                Winery winery = Winery.createWineryFromCsvLine(line);

                // Process the winery data through the pipe
                if (winery != null) {
                    // Process the winery data through the pipe
                    Winery processedWinery = wineryPipe.runFilters(winery);

                    // Save the processed winery data to the database
                    wineryRepository.save(processedWinery);
                }
            }
        };
    }


}
