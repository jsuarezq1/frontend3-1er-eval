import react, {Component} from "react";
import Textos from "../Textos/Textos";
import data from "../data.json";
import Botones from "../Botones/Botones";
import Historial from "../Historial/Historial";

const historial = [];

class Design extends Component{

    constructor(props){
        super(props);
        this.state= {
            contador: 0,
            seleccionAnterior: "",
        }
    }
//Utilizar el ciclo de vida componentDidUdate para actualizar el estado del constructor

    componentDidUpdate(estadoPrevio){
        if(estadoPrevio.contador != this.state.contador) {
            historial.push(this.state.seleccionAnterior);
        }
    }

    handleClick = (element) => {
        const id = element.target.id;
        const contador = this.state.contador;
        const anterior = this.state.seleccionAnterior;

        if (contador >= 7) {
            alert('Fin')
            } else if (id === "A" && anterior !== "A") {
                this.setState({
                    contador: contador+1,
                    seleccionAnterior: "A"
                });
            }
            else if (id==="A" && anterior ==="A") {
                this.setState({
                    contador: contador +2,
                    seleccionAnterior: "A"
                });
            }
            else if (id==="B" && anterior ==="A" ) {
                this.setState({
                    contador: contador +3,
                    seleccionAnterior: "B"
                });
            }
            else if (id==="B") {
                this.setState({
                    contador: contador +2,
                    seleccionAnterior: "B"
                });
            }
            console.log(historial);
            console.log(contador);
        }
    
        render() {
            return(
                <>
                <Textos contador= {this.state.contador} />
                <Botones 
                    handleClick ={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Historial 
                    seleccionAnterior={this.state.seleccionAnterior}
                    historial ={historial.map((historial, i)=>(
                        <li key={i} >{historial} </li>
                    ),
                    data[this.state.contador].id
                    )}
                />
                </>
            );
        }
    }

export default Design;