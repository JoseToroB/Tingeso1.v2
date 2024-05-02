package com.example.tingeso1.controllers;

import com.example.tingeso1.entities.AutoEntity;
import com.example.tingeso1.entities.ReporteAEntity;
import com.example.tingeso1.services.ReporteAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/reportesA")
@CrossOrigin("*")
public class ReporteAController {
    @Autowired
    ReporteAService reporteAService;

    @GetMapping("/listarReportesA")
    public ResponseEntity<List<ReporteAEntity>> listRA(){
        List<ReporteAEntity> r = reporteAService.getAllReportes();
        return ResponseEntity.ok(r);
    }

    @GetMapping("/calcularReporteA/{patente}")
    public ResponseEntity<ReporteAEntity> calcularReporteA(@PathVariable String patente){
        reporteAService.calcularReporteA(patente);
        ReporteAEntity reporte = reporteAService.getReporteByPatente(patente);
        return ResponseEntity.ok(reporte);
    }
    
    /*public String calcularReporteA(@PathVariable String patente, Model model){
        reporteAService.calcularReporteA(patente);
        ReporteAEntity reporte = reporteAService.getReporteByPatente(patente);
        model.addAttribute("reporte", reporte);
        return "mostrarReporteA";
    }*/

    @GetMapping("/eliminarReportes")
    public String eliminarReportes(){
        reporteAService.eliminarReportes();
        return "index";
    }

}
