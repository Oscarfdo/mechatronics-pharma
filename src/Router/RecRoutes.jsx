import { Routes, Route, Navigate } from "react-router-dom"
import { RecApp } from '../components/RecApp'
import { Navbar } from '../ui/components/NavBar';


export const RecRoutes = () => {
  return (
    <>


    <Routes>
     
            
            <Route path="recetar" element={<RecApp/>}/>
            
            

            <Route path="/" element={<Navigate to= "/inicio"/>}/>

        </Routes>

    </>
  )
}
