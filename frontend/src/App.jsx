import React from 'react';
import './App.css';

// Rutas de las imágenes estáticas (asumiendo que están en 'public/')
const LogoCBTA = '/cbta.png';
const CharacterImage = '/camaleon.png';

function App() {
    return (
        <div className="login-page">

            {/* 1. Sección Izquierda: Ilustración y Círculo */}
            <div className="left-section">
                <div className="left-circle-bg">
                    {/* Elemento del camaleón */}
                    <img
                        src={CharacterImage}
                        alt="Personaje Camaleón CBTA 134"
                        className="character-image"
                    />
                </div>
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
                    <h2 className="welcome-text">Bienvenido</h2>
                    <h3 className="session-text">Iniciar Sesión</h3>

                    {/* Formulario */}
                    <form>
                        <div className="input-group">
                            <label htmlFor="user-input">Usuario</label>
                            <input type="text" id="user-input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password-input">Contraseña</label>
                            <input type="password" id="password-input" />
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

export default App;