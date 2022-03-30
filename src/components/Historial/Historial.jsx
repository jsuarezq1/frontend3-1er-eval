import react, {Component} from "react";
//import data from '../data.json'
export default class Historial extends Component{
    render(){
        const {seleccionAnterior, historial} = this.props;
        return(
            <div className="recordatodio">
                <h3>Seleccion anterior: {seleccionAnterior} </h3>
                <h4>Historial de opciones elegidad: </h4>
                <ul>{historial} </ul>
            </div>


        )
    }
}
