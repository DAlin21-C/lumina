import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login.jsx";
import FormurarioRecuperación from "./paginas/Recuperar.jsx";
import CodigoRecuperacion from "./paginas/Codigo.jsx";
import Cambiarcontraseña  from "./paginas/Cambiar.jsx"
import Bienvenida from "./paginas/Bienvenida.jsx";
import RegistroAdministrador from "./paginas/RegistroAdministrador.jsx";
import RegistrarAlumno from "./paginas/RegistrarAlumno.jsx";
import Modificaciones from "./paginas/Modificaciones.jsx";
import ListaAsistencia from "./paginas/ListaAsistencia.jsx"
import ListaDatos from "./paginas/ListaDatos.jsx";
import Eliminaciones from "./paginas/Eliminaciones.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Bienvenida/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
