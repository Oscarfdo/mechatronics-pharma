import QRCode from "react-qr-code"

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

    

    <div className="qr"> 
    
    <QRCode value = "https://www.youtube.com/" size={128}/>

    </div>

    <div>
      <button className="button button1">Imprimir</button>
    </div>
    </>
  )
}
