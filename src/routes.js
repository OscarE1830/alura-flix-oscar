import { BrowserRouter, Routes, Route } from "react-router-dom";//en terminal npm install react-router-dom 
import Inicio from "./pages/Inicio"
import NotFound from "./pages/NotFound";
import PaginaBase from "./pages/PaginaBase";
import NuevoVideo from "./pages/NuevoVideo";
import AsistirVideo from "./pages/AsistirVideo"
import Desplazar from "./components/Desplazar"
// import Footer from "./components/Footer"
// import Header from "./components/Header"

function AppRoutes (){
    return(
        <BrowserRouter>
        <Desplazar />
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="nuevoVideo" element={<NuevoVideo />} />
                    <Route path="/video/:id" element={<AsistirVideo/>} />
                    <Route path="*" element={<NotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

// function AppRoutes (){
//     return(
//         <BrowserRouter>
//         <Desplazar />
//             <Routes>
//                     <Route index element={<><Header/><Inicio /><Footer/></>} />
//                     <Route path="nuevoVideo" element={<><Header/><NuevoVideo /><Footer/></>} />
//                     <Route path="/video/:id" element={<><Header/><AsistirVideo/><Footer/></>} />
//                     <Route path="*" element={<NotFound />} /> 
//             </Routes>
//         </BrowserRouter>
//     )
// }
export default AppRoutes;