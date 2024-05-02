import axios from "axios";

const AUTO_URL = "http://torotingesol1.brazilsouth.cloudapp.azure.com/autos";
const REPORTEA_URL = "http://torotingesol1.brazilsouth.cloudapp.azure.com/reportesA";
const REPARACION2_URL = "http://torotingesol1.brazilsouth.cloudapp.azure.com/reparaciones/crearReparacion";
function CrearAuto(a) {
    console.log("Saving vehicle:", a);
    return axios.post(`${AUTO_URL}/crearAuto`,a);
}

function CrearReparacion(r){
    console.log("Saving reparacion:", r);
    return axios.post(`${REPARACION2_URL}`, r);
}

function CrearReporteA(patente){
    console.log("Calculando reporte A para:", patente);
    return axios.get(`${REPORTEA_URL}/calcularReporteA/${patente}`);
}

export default {CrearAuto , CrearReparacion , CrearReporteA }