import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import data from "./data.json";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";


class Layout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          contador: 0,
          eleccionAnterior: "",
          historial: []
        }
        this.handleEleccion =this.handleEleccion.bind(this);
      }
    
      handleEleccion(eleccion){
        this.setState({
          eleccionAnterior: eleccion,
          historial: [...this.state.historial, eleccion],
        })

        if (this.state.contador >= 7) {
          alert('Terminó la historia!');
        }
        if (eleccion === "A" && this.state.eleccionAnterior !== "A") {
          this.setState({
            contador: this.state.contador + 1,
          });
        } else if (eleccion === "B" && this.state.eleccionAnterior === "A") {
          this.setState({
            contador: this.state.contador + 3,
          });
        }else if ((eleccion === "A" && this.state.eleccionAnterior === "A") ||(eleccion === "B")) {
          this.setState({
            contador: this.state.contador + 2,
          });
        }

      }
    
  

    render(){
        return(
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones handleEleccion={this.handleEleccion} opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b}/>
                <Recordatorio eleccionAnterior={this.state.eleccionAnterior} historial={this.state.historial.map(
            (element, index) => (
              <li key={index}>{element}</li>
            )
          )}/>
            </div>
        )
    }
}

export default Layout;