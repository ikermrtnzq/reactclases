const {Component} = require("react");

class Contador extends Component {

    //Ya no necesitams poner ni let ni var
    numero = 1;

    //Ya no es necesario poner function
    incremento = () => {

        //Para acceder a cualquier elemento de la clase usamos this
        this.numero += 1;
        console.log(this.numero)
    }

    //La sintaxix para llamar a los metodos cambia
    render(){
        return(
            <div>
                <h1>CONTADOR JSX</h1>
                <p>{this.numero}</p>
                <button onClick={this.incremento}
                >Incrementar</button>
            </div>
        )
    }
}

export default Contador;