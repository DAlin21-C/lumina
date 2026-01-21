import React from 'react';
import '../plantillascss/Recuperar.css';


// Rutas de las imágenes estáticas (asumiendo que están en 'public/')
const LogoCBTA = '/cbta.png';
const CharacterImage = '/camaleon_estresado 1.png';

function Recuperar(props) {
    return (
        <div className="login-page">

            {/* 1. Sección Izquierda: Ilustración y Círculo */}
            <div className="left-section">
                <img src="/icono_codigo.png" alt="Logo codigo" className="icon-codigo" />
                <img
                    src={CharacterImage}
                    alt="Personaje Camaleón CBTA 134"
                    className="character-image"
                />
                <button type="submit" className="regresar-button">
                    Regresar
                </button>

            </div>

            {/* 2. Sección Derecha: Formulario de Inicio de Sesión */}
            <div className="right-section">
                <div className="login-card">
                    {/* Logo superior (LUMINA) y Logo CBTA */}
                    <div className="top-logo-container">
                        <div className="top-logo-text"></div>
                        <img src="/Lumina%20chido.png" alt="Lumina Logo" className="lumina-icon" />
                    </div>

                    <img src={LogoCBTA} alt="CBTA 134 Logo" className="cbta-logo" />

                    {/* Textos de bienvenida y sesión */}
                    <h3 className="session-text">Recuperación de </h3>
                    <h3 className="session-text">contraseña</h3>

                    {/* Formulario */}
                    <form>
                        <div className="input-group">
                            <label htmlFor="user-input">Usuario</label>
                            <input type="text" id="user-input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password-input">Correo electronico</label>
                            <input type="password" id="password-input" />
                        </div>
                        <button type="submit" className="login-button">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Recuperar;