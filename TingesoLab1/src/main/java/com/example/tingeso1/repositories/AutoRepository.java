package com.example.tingeso1.repositories;

import com.example.tingeso1.entities.AutoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.*;
import java.util.List;

@Repository
public interface AutoRepository extends JpaRepository<AutoEntity, Integer> {
    public AutoEntity findByPatente(String patente);
    public List<AutoEntity> findAllByTipo(String tipo);
    public List<AutoEntity> findAllByCombustible(String combustible);

}