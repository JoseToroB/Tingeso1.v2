import axios from "axios";

const AUTO_URL = "http://torotingesol1.brazilsouth.cloudapp.azure.com/autos";
/*const REPARACION_URL = "http://localhost:8090/HistorialReparaciones";*/

function CrearAuto(a) {
    console.log("Saving vehicle:", a);
    return axios.post(`${AUTO_URL}/crearAuto`,a);
}
export default {CrearAuto}

/*
function CrearReparacion(r){
    return axios.post(`${REPARACIONL_URL}/savehistorial`, r);
}*/