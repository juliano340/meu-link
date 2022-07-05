import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Links from "./pages/Links";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/links" element={<Links/>}> </Route>

            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp;