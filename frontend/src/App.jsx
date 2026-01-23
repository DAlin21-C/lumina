import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login.jsx";
import FormurarioRecuperación from "./paginas/Recuperar.jsx";
import CodigoRecuperacion from "./paginas/Codigo.jsx";

import Bienvenida from "./paginas/Bienvenida.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Bienvenida />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
