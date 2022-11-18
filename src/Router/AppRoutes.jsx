import { Routes, Route, Navigate } from "react-router-dom"
import Inicio from "../components/Inicio"
import { Registro } from "../components/Registro"
import  {Login} from "../components/LogIn"
import { RecRoutes } from "./RecRoutes"



export const AppRoutes = () => {
  return (
    <>
        

        <Routes>

            <Route path="inicio" element={<Inicio/>} />
            <Route path="registro" element={<Registro/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="/*" element={<RecRoutes/>}/>


        </Routes>
    </>
  )
}
