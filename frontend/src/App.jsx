import React, { useState } from "react";

function App() {
    const [form, setForm] = useState({
        nombre: "",
        aPaterno: "",
        aMaterno: "",
        noControl: "",
        grado: "",
        especialidad: "",
        telefono: "",
        codigoBarra: "",
        salt: ""
    });

    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const insertarAlumno = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8080/api/Alumno/insertar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        const text = await res.text();
        setMensaje(text);
    };

    return (
        <div style={{ width: "350px", margin: "50px auto" }}>
            <h2>Registrar Alumno</h2>

            <form onSubmit={insertarAlumno}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                /><br />

                <input
                    type="text"
                    name="aPaterno"
                    placeholder="Apellido Paterno"
                    value={form.aPaterno}
                    onChange={handleChange}
                    required
                /><br />

                <input
                    type="text"
                    name="aMaterno"
                    placeholder="Apellido Materno"
                    value={form.aMaterno}
                    onChange={handleChange}
                /><br />

                <input
                    type="number"
                    name="noControl"
                    placeholder="No. Control"
                    value={form.noControl}
                    onChange={handleChange}
                    required
                /><br />

                <input
                    type="text"
                    name="grado"
                    placeholder="Grado"
                    value={form.grado}
                    onChange={handleChange}
                /><br />

                <input
                    type="text"
                    name="especialidad"
                    placeholder="Especialidad"
                    value={form.especialidad}
                    onChange={handleChange}
                /><br />

                <input
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={handleChange}
                /><br />

                <input
                    type="text"
                    name="codigoBarra"
                    placeholder="Código de Barra"
                    value={form.codigoBarra}
                    onChange={handleChange}
                /><br />

                <input
                    type="text"
                    name="salt"
                    placeholder="Salt"
                    value={form.salt}
                    onChange={handleChange}
                /><br />

                <button type="submit">Guardar</button>
            </form>

            <p>{mensaje}</p>
        </div>
    );
}

export default App;
