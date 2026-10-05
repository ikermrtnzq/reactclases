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

    //Para declarar variables STATE
    state = { 
        valor : parseInt(this.props.inicio)
    }

    //Para modificar valor de una variable STATE
    incrementarValor = () => {
        //ARRAYS
        var titulos=[];
        titulos.push(<h1>Titulo 1</h1>)
        titulos.push(<h1>Titulo 2</h1>)
        this.setState({
            valor: this.state.valor + 1
        })

    }

    //La sintaxix para llamar a los metodos cambia
    render(){
        return(
            <div>
                <h1>CONTADOR JSX</h1>
                <p>{this.numero}</p>
                <button onClick={this.incremento}
                >Incrementar</button>
                <p>{this.state.valor}</p>
                <button onClick={this.incrementarValor}
                >Incrementar</button>
            </div>
        )
    }
}

export default Contador;