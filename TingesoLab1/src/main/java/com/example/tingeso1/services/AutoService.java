package com.example.tingeso1.services;

import com.example.tingeso1.entities.AutoEntity;
import com.example.tingeso1.repositories.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;

@Service
public class AutoService {
    @Autowired
    AutoRepository autoRepository;

    public AutoEntity getAutoByPatente(String patente) {
        return autoRepository.findByPatente(patente);
    }

    public ResponseEntity<AutoEntity> guardarAuto(AutoEntity auto) {
        return ResponseEntity.ok(autoRepository.save(auto));
    }

    public void eliminarAutos() {
        autoRepository.deleteAll();
    }
    public List<AutoEntity> getAutos() {
        return autoRepository.findAll();
    }

}