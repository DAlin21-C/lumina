import React from 'react';
import '../plantillascss/Recuperar.css';


// Rutas de las imágenes estáticas (asumiendo que están en 'public/')
const LogoCBTA = '/cbta.png';
const CharacterImage = '/camaleon_estresado 1.png';

function Recuperar(props) {
    return (
        <div className="recuperar-page">

            {/* 1. Sección Izquierda: Ilustración y Círculo */}
            <div className="recuperar-left-section">
                <img src="/icono_codigo.png" alt="Logo codigo" className="recuperar-icon" />
                <img
                    src={CharacterImage}
                    alt="Personaje Camaleón CBTA 134"
                    className="recuperar-character-image"
                />
                <button type="submit" className="recuperar-regresar-button">
                    Regresar
                </button>

            </div>

            {/* 2. Sección Derecha: Formulario de Inicio de Sesión */}
            <div className="recuperar-right-section">
                <div className="recuperar-card">
                    {/* Logo superior (LUMINA) y Logo CBTA */}
                    <div className="recuperar-top-logo-container">
                        <div className="recuperar-top-logo-text"></div>
                        <img src="/Lumina%20chido.png" alt="Lumina Logo" className="recuperar-lumina-icon" />
                    </div>

                    <img src={LogoCBTA} alt="CBTA 134 Logo" className="recuperar-cbta-logo" />

                    {/* Textos de bienvenida y sesión */}
                    <h3 className="recuperar-session-text">Recuperación de </h3>
                    <h3 className="recuperar-session-text">contraseña</h3>

                    {/* Formulario */}
                    <form>
                        <div className="recuperar-input-group">
                            <label htmlFor="recuperar-user-input">Usuario</label>
                            <input type="text" id="recuperar-user-input" />
                        </div>

                        <div className="recuperar-input-group">
                            <label htmlFor="recuperar-password-input">Correo electronico</label>
                            <input type="password" id="recuperar-password-input" />
                        </div>
                        <button type="submit" className="recuperar-siguiente-button">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Recuperar;