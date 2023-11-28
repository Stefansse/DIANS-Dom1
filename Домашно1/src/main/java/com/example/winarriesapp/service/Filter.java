package com.example.winarriesapp.service;

public interface Filter<T> {
    T execute(T input);
}