import { useEffect, useState } from "react"

import autoService from '../services/autoService.js';
import { Link } from 'react-router-dom';
const CrearReparacion = () => {
    const [montoTotal, setMontoTotal] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [horaIngreso, setHoraIngreso] = useState('');
    const [fechaSalida, setFechaSalida] = useState('');
    const [horaSalida, setHoraSalida] = useState('');
    const [fechaEntrega, setFechaEntrega] = useState('');
    const [horaEntrega, setHoraEntrega] = useState('');
    const [patente, setPatente] = useState('');
    const [tipo, setTipo] = useState('');
    const [marca, setMarca] = useState('');
    const [motor, setMotor] = useState('');
    const [tipoReparacion, setTipoReparacion] = useState([]);

    const handleCrearReparacion = (e) => {
        e.preventDefault();
        try {
            const response = autoService.CrearReparacion({
                montoTotal,
                fechaIngreso,
                horaIngreso,
                fechaSalida,
                horaSalida,
                fechaEntrega,
                horaEntrega,
                patente,
                tipo,
                marca,
                motor,
                tipoReparacion
            });
            setMontoTotal('');
            setFechaIngreso('');
            setHoraIngreso('');
            setFechaSalida('');
            setHoraSalida('');
            setFechaEntrega('');
            setHoraEntrega('');
            setPatente('');
            setTipo('');
            setMarca('');
            setMotor('');
            setTipoReparacion([]);
            alert("Reparación registrada con éxito");
        }
        catch (error) {
            console.log(error);
            alert("Error al registrar reparación");
        }
    };

    return (
        <div>
            <div>
                <Link to="/">
                    <button className="btn-accion">Inicio</button>
                </Link>
            </div>
            <h1>Crear Reparación</h1>
            <form onSubmit={handleCrearReparacion}>
                <div>
                    <label>
                        Monto Total:
                        <input type="number" value={montoTotal} onChange={(e) => setMontoTotal(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Fecha de Ingreso:
                        <input type="text" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Hora de Ingreso: ejemplo 0930 o 2100
                        <input type="text" value={horaIngreso} onChange={(e) => setHoraIngreso(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Fecha de Salida:
                        <input type="text" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Hora de Salida: ejemplo 0930 o 2100
                        <input type="text" value={horaSalida} onChange={(e) => setHoraSalida(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Fecha de Entrega:
                        <input type="text" value={fechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Hora de Entrega: ejemplo 0930 o 2100
                        <input type="text" value={horaEntrega} onChange={(e) => setHoraEntrega(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Patente:
                        <input type="text" value={patente} onChange={(e) => setPatente(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Tipo de auto:
                        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Marca:
                        <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Motor: tipo de combustible
                        <input type="text" value={motor} onChange={(e) => setMotor(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Tipos de reparación: números separados por coma
                        <input type="text" value={tipoReparacion} onChange={(e) => setTipoReparacion(e.target.value.split(',').map(Number))} />
                    </label>
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>

    );
};

export default CrearReparacion;