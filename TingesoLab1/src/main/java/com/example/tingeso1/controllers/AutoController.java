package com.example.tingeso1.controllers;

import com.example.tingeso1.entities.AutoEntity;
import com.example.tingeso1.services.AutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/autos")
@CrossOrigin("*")
public class AutoController {
    @Autowired
    AutoService autoService;

    @GetMapping("/listarAutos")
    public ResponseEntity<List<AutoEntity>> listVehiculos(){
        List<AutoEntity> a = autoService.getAutos();
        return ResponseEntity.ok(a);
    }

    @PostMapping("/crearAuto")
    public ResponseEntity<AutoEntity> crearAuto(@RequestBody AutoEntity auto) {
        return ResponseEntity.ok(autoService.guardarAuto(auto).getBody());
    }
    /*
    public String crearAuto(@ModelAttribute("auto") AutoEntity auto, Model model) {
        autoService.guardarAuto(auto);
        model.addAttribute("auto",auto);
        return "index";
    }*/

    @GetMapping("/borrarAutos")
    public String borrarAutos() {
        autoService.eliminarAutos();
        return "index";
    }

}
