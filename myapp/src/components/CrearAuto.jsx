import { useEffect, useState } from "react"
import autoService from '../services/autoService.js';
import { Link } from 'react-router-dom';

export default function crearAuto() {
    const [patente, setPatente] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [tipo, setTipo] = useState("");
    const [anioFabricacion, setAnioFabricacion] = useState("");
    const [combustible, setCombustible] = useState("");
    const [nAsientos, setNAsientos] = useState("");
    const [kilometraje, setKilometraje] = useState("");
    const [antiguedad, setAntiguedad] = useState("");

    async function handleCrearAuto(e) {
        e.preventDefault();
        try {
            const response = await autoService.CrearAuto({
                patente,
                marca,
                modelo,
                tipo,
                anioFabricacion,
                combustible,
                nAsientos,
                kilometraje,
                antiguedad
            })
            setPatente("");
            setMarca("");
            setModelo("");
            setTipo("");
            setAnioFabricacion("");
            setCombustible("");
            setNAsientos("");
            setKilometraje("");
            setAntiguedad("");
            alert("Auto registrado con exito");
        } catch (error) {
            console.log(error);
            alert("Error al registrar auto");
        }
    }


    return (
        <div className="container">
            <div>
                <Link to="/">
                    <button className="btn-accion">Inicio</button>
                </Link>
            </div>
            <h1 className="mb-4">Registrar Auto</h1>
            <form className="border row g-3 px-4" onSubmit={handleCrearAuto}>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="patente" className="form-label">Patente</label>
                    <input id="patente" type="text" className="form-control"
                        value={patente}
                        onChange={e => setPatente(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="marca" className="form-label">Marca</label>
                    <input id="marca" type="text" className="form-control"
                        value={marca}
                        onChange={e => setMarca(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="modelo" className="form-label">Modelo</label>
                    <input id="modelo" type="text" className="form-control"
                        value={modelo}
                        onChange={e => setModelo(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="tipo" className="form-label">Tipo</label>
                    <input id="tipo" type="text" className="form-control"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="anioFabricacion" className="form-label">Año de Fabricacion</label>
                    <input id="anioFabricacion" type="number" className="form-control"
                        value={anioFabricacion}
                        onChange={e => setAnioFabricacion(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="combustible" className="form-label">Combustible</label>
                    <input id="combustible" type="text" className="form-control"
                        value={combustible}
                        onChange={e => setCombustible(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="nAsientos" className="form-label">Numero de Asientos</label>
                    <input id="nAsientos" type="number" className="form-control"
                        value={nAsientos}
                        onChange={e => setNAsientos(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="kilometraje" className="form-label">Kilometraje</label>
                    <input id="kilometraje" type="number" className="form-control"
                        value={kilometraje}
                        onChange={e => setKilometraje(e.target.value)} />
                </div>

                <div className="col-md-6 mr-md-3">
                    <label htmlFor="antiguedad" className="form-label">Antiguedad</label>
                    <input id="antiguedad" type="number" className="form-control"
                        value={antiguedad}
                        onChange={e => setAntiguedad(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Registrar Vehiculo</button>
            </form>
        </div>
    )
}