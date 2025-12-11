import './App.css'; // Asegúrate de importar el CSS

// Simulación de los recursos de imagen (DEBES reemplazarlos con tus archivos reales)
const LogoCBTA = 'cbta.png'; // Reemplaza con la ruta a tu logo
const CharacterImage = 'camaleon.png'; // Reemplaza con la ruta a tu personaje

function App() {
    return (
        <div className="login-page">
            {/* 1. Sección Izquierda: Ilustración y Círculo */}
            <div className="left-section">
                <div className="left-circle-bg">
                    {/* Colocamos la imagen DIRECTAMENTE aquí para controlarla con CSS */}
                    <img
                        src={CharacterImage}
                        alt="Personaje Camaleón CBTA 134"
                        className="character-image"
                    />

                    {/* Eliminamos el div.character-placeholder que ya no es necesario */}
                </div>
            </div>

            {/* 2. Sección Derecha: Formulario de Inicio de Sesión */}
            <div className="right-section">
                {/* Contenedor del formulario con el fondo verde claro */}
                <div className="login-card">
                    {/* Logo superior (LUMINA) - Lo dejamos como placeholder de texto o lo quitas */}
                    <div className="top-logo">LUMINA</div>

                    {/* Logo CBTA 134 */}
                    <img src={LogoCBTA} alt="CBTA 134 Logo" className="cbta-logo" />

                    <h2 className="welcome-text">Bienvenido</h2>
                    <h3 className="session-text">Iniciar Sesión</h3>

                    {/* Formulario */}
                    <form>
                        <div className="input-group">
                            <label htmlFor="user-input">Usuario</label>
                            <input type="text" id="user-input" placeholder=" " />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password-input">Contraseña</label>
                            <input type="password" id="password-input" placeholder=" " />
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