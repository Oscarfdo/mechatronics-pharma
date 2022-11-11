import { Navigate, useNavigate } from "react-router-dom";



export default function Inicio() {
    const navigate = useNavigate();

    const recetar = () =>{
        navigate ('/recetar');
    }

    const registrar = () =>{
      navigate ('/registro');
  }

    const login = () =>{
      navigate ('/Login');
  }

  return (
    <>

    
        
          <div className="cuadro">
            <h1>Mechatronics Pharma</h1>
            <button className="button button1" onClick={login}> Recetar </button>
          </div>  
        
    </>
  )
}
