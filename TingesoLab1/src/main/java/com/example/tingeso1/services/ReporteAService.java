package com.example.tingeso1.services;

import com.example.tingeso1.entities.AutoEntity;
import com.example.tingeso1.entities.ReparacionEntity;
import com.example.tingeso1.entities.ReporteAEntity;
import com.example.tingeso1.repositories.ReporteARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@Service
public class ReporteAService {
    @Autowired
    ReporteARepository reporteARepository;

    @Autowired
    AutoService autoService;

    @Autowired
    ReparacionService reparacionService;

    public String calcularReporteA(String patente){
        //obtengo el auto
        AutoEntity auto = autoService.getAutoByPatente(patente);
        //obtengo las reparaciones del auto
        List<ReparacionEntity> reparaciones = reparacionService.getReparacionesByPatente(patente);
        //reviso que la lista de reparaciones no este vacia
        if (reparaciones.isEmpty()){
            return "No hay reparaciones para este auto";
        }
        //obtengo la fecha del pc
        Calendar calendar = Calendar.getInstance();
        // Obtiene el mes actual (los meses van de 0 a 11)
        int mesActual = calendar.get(Calendar.MONTH) + 1;
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
        String fechaFormateada = dateFormat.format(calendar.getTime());
        //calculo el costo total de las reparaciones
        int costoTotal=0;
        for (ReparacionEntity reparacion:reparaciones){
            costoTotal+=reparacion.getMontoTotal();
        }
        //creo el reporte ( con menos datos de los que deberia
        ReporteAEntity reporte = new ReporteAEntity();
        reporte.setPatente(patente);
        reporte.setTipo_motor(auto.getCombustible());
        reporte.setAntiguedad_auto(auto.getAntiguedad());
        reporte.setTipo_auto(auto.getTipo());
        reporte.setIdAuto(auto.getId());
        reporte.setCostoTotalReparaciones(costoTotal);
        reporte.setDescuentos(0);
        reporte.setRecargos(0);
        //guardo el reporte
        reporteARepository.save(reporte);
        return "index";
    }
    public void eliminarReportes() {
        reporteARepository.deleteAll();
    }

    public ReporteAEntity getReporteByPatente(String patente) {
        List<ReporteAEntity> reportes = reporteARepository.findAllByPatente(patente);
        //entrego el reporte de mayor id ( deberia ser el mas actual )
        int i=0;
        int size=reportes.size();
        int mayor=0;
        for(i=0;i<size;i++){
            if (reportes.get(i).getId()>mayor){
                mayor=reportes.get(i).getId();
            }
        }
        return reporteARepository.findById(mayor);
    }

    public void guardarReporte(ReporteAEntity reporte) {
        reporteARepository.save(reporte);
    }

    public List<ReporteAEntity> getAllReportes() {
        return reporteARepository.findAll();
    }

}
