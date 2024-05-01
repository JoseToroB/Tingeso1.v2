package com.example.tingeso1.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "auto")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class AutoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private int id;
    private String patente; //4letras,2numeros
    private String marca;
    private String modelo;
    private String tipo; //Sedan, Hatchback, SUV, Pickup, Furgoneta
    private int anioFabricacion;
    private String combustible; //Gasolina, Diesel, Electrico, Hibrido
    private int nAsientos;
    private int kilometraje;
    private int antiguedad;//año-fabricacion

}