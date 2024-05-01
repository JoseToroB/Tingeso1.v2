package com.example.tingeso1.repositories;

import com.example.tingeso1.entities.ReparacionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.*;
import java.util.List;
@Repository
public interface ReparacionRepository extends JpaRepository<ReparacionEntity, Integer>{
    public ReparacionEntity findByPatente(String patente);
    public List<ReparacionEntity> findAllBypatente(String patente);
    public List<ReparacionEntity> findAllByTipo(String tipo);
    public List<ReparacionEntity> findAllByMarca(String marca);
    public List<ReparacionEntity> findAllByMotor(String motor);

}
