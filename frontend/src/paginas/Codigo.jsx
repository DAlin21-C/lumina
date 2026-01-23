import React from 'react';
import '../plantillascss/Codigo.css';


// Rutas de las imágenes estáticas (asumiendo que están en 'public/')
const LogoCBTA = '/cbta.png';
const CharacterImage = '/camaleon_serio.png';

function Codigo() {
    return (
        <div className="codigo-page">




            {/* 2. Sección Derecha: Formulario de Inicio de Sesión */}
            <div className="codigo-right-section">
                <div className="codigo-card">
                    {/* Logo superior (LUMINA) y Logo CBTA */}
                    <div className="codigo-top-logo-container">
                        <div className="codigo-top-logo-text"></div>
                        <img src="/Lumina%20chido.png" alt="Lumina Logo" className="codigo-lumina-icon" />
                    </div>

                    <img src={LogoCBTA} alt="CBTA 134 Logo" className="codigo-cbta-logo" />

                    {/* Textos de bienvenida y sesión */}
                    <h3 className="codigo-session-text">Código de verificación</h3>

                    {/* Formulario */}
                    <form>
                        <div className="codigo-input-group">
                            <label htmlFor="codigo-user-input">****</label>
                            <input type="text" id="codigo-user-input" />
                        </div>

                        <button type="submit" className="codigo-button">
                            Siguiente
                        </button>
                    </form>
                </div>
            </div>


            <div className="codigo-left-section">
                <div className="codigo-left-circle-bg">
                    {/* Elemento del camaleón */}
                    <img
                        src={CharacterImage}
                        alt="Personaje Camaleón CBTA 134"
                        className="codigo-character-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Codigo;