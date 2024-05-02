import axios from "axios";

const AUTO_URL = "http://torotingesol1.brazilsouth.cloudapp.azure.com/autos";
const REPORTEA_URL = "http://torotingesol1.brazilsouth.cloudapp.azure.com/reportesA";
function CrearAuto(a) {
    console.log("Saving vehicle:", a);
    return axios.post(`${AUTO_URL}/crearAuto`,a);
}

function CrearReparacion(r){
    return axios.post(`http://torotingesol1.brazilsouth.cloudapp.azure.com/reparaciones/crearReparacion`, r);
}

function CrearReporteA(patente){
    return axios.get(`${REPORTEA_URL}/calcularReporteA/${patente}`);
}

export default {CrearAuto , CrearReparacion , CrearReporteA }