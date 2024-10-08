import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"



function AppRoutes(){

    return(
        <>
        <Routes>
            <Route path="/home" element={<Home />} />

        </Routes>
        </>
    )
}
export default AppRoutes