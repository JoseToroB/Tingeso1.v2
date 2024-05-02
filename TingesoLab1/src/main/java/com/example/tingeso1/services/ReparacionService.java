package com.example.tingeso1.services;

import com.example.tingeso1.entities.ReparacionEntity;
import com.example.tingeso1.repositories.ReparacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReparacionService {
    @Autowired
    ReparacionRepository reparacionRepository;

    public void eliminarReparaciones() {
        reparacionRepository.deleteAll();
    }
    public List<ReparacionEntity> getReparaciones() {
        return reparacionRepository.findAll();
    }

    public ReparacionEntity getReparacionByPatente(String patente) {
        return reparacionRepository.findByPatente(patente);

    }
    public List<ReparacionEntity> getReparacionesByPatente(String patente) {
        return reparacionRepository.findAllBypatente(patente);

    }
    public ReparacionEntity guardarReparacion(ReparacionEntity reparacion) {
        return reparacionRepository.save(reparacion);
    
    }
}
