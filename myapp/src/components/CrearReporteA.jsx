import { useEffect, useState } from "react"
import autoService from '../services/autoService.js';
import { Link } from 'react-router-dom';

export default function CrearReporteA(){
    const [patente, setPatente] = useState("");
    const [reporteA, setReporteA] = useState("");

    async function handleCrearReporteA(e){
        e.preventDefault();
        try{
            const response = await autoService.CrearReporteA(patente);
            setReporteA(response.data);
            setPatente("");
            alert("Reporte A generado ");
        }catch(error){
            console.log(error);
            alert("Error al calcular reporte A");
        }
    }

    return(
        <div>
            <div>
                <Link to="/">
                    <button className="btn-accion">Inicio</button>
                </Link>
            </div>
            <h1 className="mb-4">Reporte A</h1>
            <div>
                <form>
                    <div>
                        <label>
                            patente:
                            <input type="text" placeholder="Patente" value={patente} onChange={e => setPatente(e.target.value)} />
                        </label>
                    </div>
                    <button onClick={handleCrearReporteA}>Calcular Reporte A</button>
                </form>
            </div>
            {reporteA && (
                <div>
                    <h2>Detalle del Reporte</h2>
                    <p>Patente: {reporteA.patente} </p>
                    <p>Tipo auto: {reporteA.tipo_auto} </p>
                    <p>Tipo Motor: {reporteA.tipo_motor} </p>
                    <p>costo total: {reporteA.costoTotalReparaciones} </p>
                    <p>antiguedad: {reporteA.antiguedad_auto}</p>
                </div>
            )}
        </div>
    )
}
    