import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login.jsx";
import FormurarioRecuperación from "./paginas/Recuperar.jsx";
import CodigoRecuperacion from "./paginas/Codigo.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CodigoRecuperacion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
