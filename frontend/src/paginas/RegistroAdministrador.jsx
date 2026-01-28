import React from 'react';
import '../plantillascss/Administrador.css';

function RegistroAdministrador({ alRegresar }) {
    return (
        <div className="admin-register-container">
            <header className="admin-header-banner">
                <h2>Registrar  Administrador</h2>
            </header>

            <div className="admin-content-body">
                {/* Columna de campos de texto */}
                <div className="inputs-column">
                    <div className="inputs-card-cream">
                        <input type="text" placeholder="Nombre" className="oval-field" />
                        <input type="text" placeholder="Apellido Paterno" className="oval-field" />
                        <input type="text" placeholder="Apellido Materno" className="oval-field" />
                        <input type="text" placeholder="Nombre de usuario" className="oval-field" />
                        <input type="password" placeholder="Contraseña" className="oval-field" />
                        <input type="password" placeholder="Confirmar contraseña" className="oval-field" />
                        <input type="email" placeholder="Correo electrónico" className="oval-field" />
                    </div>
                </div>

                {/* Columna de Mascota y Botones */}
                <div className="visual-column">
                    <img src="/Camaleon4.png" alt="Mascota" className="mascot-img-large" />
                    <div className="form-action-buttons">
                        <button className="btn-confirm">Registrar</button>
                        <button className="btn-cancel" onClick={alRegresar}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistroAdministrador;