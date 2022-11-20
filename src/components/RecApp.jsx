import QRCode from "react-qr-code"
import {Example} from "../components/Imprimir"


export const RecApp = () => {
  return (
    <>
        <div className="box">
             <div className="container-1">

              <span className="icon"><i className="fa fa-search"></i></span>
                  <input 
                  type="search" 
                  id="search" 
                  placeholder="Introduzca medicamento..." />

             </div>
        </div >

        <div className="cuadropequeño">
        <p>farmaco 1 </p>
        <p>farmaco 2 </p>
        <p>farmaco 3 </p>
        </div>

    
  <div>

  <Example className="qr"/>
  
  </div>

  
    </>
  )
}
