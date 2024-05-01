package com.example.tingeso1.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table (name = "reparacion")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReparacionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private int id;
    private String fechaIngreso;
    private String horaIngreso;
    private int montoTotal;
    private String fechaSalida;
    private String horaSalida;
    private String fechaEntrega;
    private String horaEntrega;

    @ElementCollection
    private List<Integer> tipoReparacion = new ArrayList<Integer>();

    //estos 4 datos son para los reportes//
    private String patente;//r1
    private String tipo;//r2
    private String marca;//r3
    private String motor;//r4
}