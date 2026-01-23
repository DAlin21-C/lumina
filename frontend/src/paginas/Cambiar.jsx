import React from 'react';
import '../plantillascss/Cambiar.css';


// Rutas de las imágenes estáticas (asumiendo que están en 'public/')
const LogoCBTA = '/cbta.png';
const CharacterImage = '/clave.png';

function Cambiar(props) {
    return (
        <div className="cambiar-page">

            {/* 1. Sección Izquierda: Ilustración y Círculo */}
            <div className="cambiar-left-section">
                <img
                    src={CharacterImage}
                    alt="Personaje Camaleón CBTA 134"
                    className="cambiar-character-image"
                />
                <button type="submit" className="cambiar-regresar-button">
                    Regresar
                </button>

            </div>

            {/* 2. Sección Derecha: Formulario de Inicio de Sesión */}
            <div className="cambiar-right-section">
                <div className="cambiar-card">
                    {/* Logo superior (LUMINA) y Logo CBTA */}
                    <div className="cambiar-top-logo-container">
                        <div className="cambiar-top-logo-text"></div>
                        <img src="/Lumina%20chido.png" alt="Lumina Logo" className="cambiar-lumina-icon" />
                    </div>

                    <img src={LogoCBTA} alt="CBTA 134 Logo" className="cambiar-cbta-logo" />

                    {/* Textos de bienvenida y sesión */}
                    <h2 className="cambiar-session-text">Cambiar contraseña </h2>

                    {/* Formulario */}
                    <form>
                        <div className="cambiar-input-group">
                            <label htmlFor="cambiar-user-input">Usuario</label>
                            <input type="text" id="cambiar-user-input" />
                        </div>
                        <div className="cambiar-input-group">
                            <label htmlFor="cambiar-user-input">Nueva contraseña</label>
                            <input type="text" id="cambiar-user-input" />
                        </div>
                        <div className="cambiar-input-group">
                            <label htmlFor="cambiar-password-input">Confirmar contraseña</label>
                            <input type="password" id="cambiar-password-input" />
                        </div>
                        <button type="submit" className="cambiar-siguiente-button">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cambiar;