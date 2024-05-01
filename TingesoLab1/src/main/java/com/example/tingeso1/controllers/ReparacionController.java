package com.example.tingeso1.controllers;

import com.example.tingeso1.entities.AutoEntity;
import com.example.tingeso1.entities.ReparacionEntity;
import com.example.tingeso1.services.ReparacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/reparaciones")
public class ReparacionController {
    @Autowired
    ReparacionService reparacionService;

    @GetMapping("/listarReparaciones")
    public ResponseEntity<List<ReparacionEntity>> listReparacion(){
        List<ReparacionEntity> reparaciones = reparacionService.getReparaciones();
        return ResponseEntity.ok(reparaciones);
    }
    @PostMapping("/crearReparacion")
    public String crearReparacion(@ModelAttribute("reparacion") ReparacionEntity reparacion, Model model) {
        reparacionService.guardarReparacion(reparacion);
        model.addAttribute("reparacion",reparacion);
        return "index";
    }
    @GetMapping("/borrarReparaciones")
    public String borrarReparaciones() {
        reparacionService.eliminarReparaciones();
        return "index";
    }


}
