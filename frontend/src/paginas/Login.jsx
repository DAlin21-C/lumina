import React from 'react';
import '../plantillascss/login.css';


// Rutas de las imágenes estáticas (asumiendo que están en 'public/')
const LogoCBTA = '/cbta.png';
const CharacterImage = '/camaleon.png';

function Login() {
    return (
        <div className="login-page">

            {/* 1. Sección Izquierda: Ilustración y Círculo */}
            <div className="login-left-section">
                <div className="login-left-circle-bg">
                    {/* Elemento del camaleón */}
                    <img
                        src={CharacterImage}
                        alt="Personaje Camaleón CBTA 134"
                        className="login-character-image"
                    />
                </div>
            </div>

            {/* 2. Sección Derecha: Formulario de Inicio de Sesión */}
            <div className="login-right-section">
                <div className="login-card">
                    {/* Logo superior (LUMINA) y Logo CBTA */}
                    <div className="login-top-logo-container">
                        <div className="login-top-logo-text"></div>
                        <img src="/Lumina%20chido.png" alt="Lumina Logo" className="login-lumina-icon" />
                    </div>

                    <img src={LogoCBTA} alt="CBTA 134 Logo" className="login-cbta-logo" />

                    {/* Textos de bienvenida y sesión */}
                    <h2 className="login-welcome-text">Bienvenido</h2>
                    <h3 className="login-session-text">Iniciar Sesión</h3>

                    {/* Formulario */}
                    <form>
                        <div className="login-input-group">
                            <label htmlFor="login-user-input">Usuario</label>
                            <input type="text" id="login-user-input" />
                        </div>

                        <div className="login-input-group">
                            <label htmlFor="login-password-input">Contraseña</label>
                            <input type="password" id="login-password-input" />
                        </div>

                        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>

                        <button type="submit" className="login-button">
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;