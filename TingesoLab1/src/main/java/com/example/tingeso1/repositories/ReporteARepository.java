package com.example.tingeso1.repositories;

import com.example.tingeso1.entities.ReporteAEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReporteARepository extends JpaRepository<ReporteAEntity,Integer> {

    public List<ReporteAEntity> findAllByPatente(String patente);
    public ReporteAEntity findById(int id);
}
