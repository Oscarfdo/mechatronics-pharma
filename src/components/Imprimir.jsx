import QRCode from "react-qr-code"
import React, {Component} from 'react';
import ReactToPrint from "react-to-print";

 export class ComponentToPrint extends React.Component {
    render() {
      return (
        <QRCode value = "https://www.youtube.com/" size={128}/>
      );
    }
  }
  
  export class Example extends React.Component {
    render() {
      return (
        <div className="qr">

          <ComponentToPrint ref={el => (this.componentRef = el)} />

          <div className="qr"></div>

          <ReactToPrint
            trigger={() => <a href="#" className="button button1">Imprimir QR</a>}
            content={() => this.componentRef}
          />
        </div>
      );
    }
  }