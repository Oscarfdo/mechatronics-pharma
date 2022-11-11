import { Routes, Route, Navigate } from "react-router-dom"
import Inicio from "../components/Inicio"
import { RecApp } from "../components/RecApp"
import { Registro } from "../components/Registro"
import  {Login} from "../components/LogIn"



export const AppRoutes = () => {
  return (
    <>
        

        <Routes>

            <Route path="inicio" element={<Inicio/>} />
            <Route path="recetar" element={<RecApp/>}/>
            <Route path="registro" element={<Registro/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="/" element={<Navigate to= "/inicio"/>}/>

        </Routes>
    </>
  )
}
