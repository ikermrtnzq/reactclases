
import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component {
    state = {
        numeros: [],
        suma : 0
    };

    generarNumeros = () => {

        for (let i = 1; i <= 3; i++) {
            const num = parseInt(Math.random() * 120) + 1;
            this.state.numeros.push(num);
        }

        this.setState({
            numeros: this.state.numeros
        });
    };

    sumar = (numero) => {
        this.setState({
            suma: this.state.suma + parseInt(numero)  
        });

    }

    render() {
        return (
            <div>
                {
                    this.valor == 0 ?
                            (<h1>ES 0 </h1>):
                            (<h1>ES 0 </h1>)

                }
                <h1>Padre Numeros</h1>
                <h2>La suma de los numeros es: {this.state.suma} </h2>

                <button onClick={this.generarNumeros}>
                    GENERAR NUMEROS
                </button>

                {this.state.numeros.map((numero, index) => {
                    console.log(numero);

                    return (
                        <HijoNumero numero={numero} sumar={this.sumar}></HijoNumero>
                    );
                })}
            </div>
        );
    }
}

export default PadreNumeros;
