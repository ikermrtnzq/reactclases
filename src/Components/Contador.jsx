const {Component} = require("react");

class Contador extends Component {
    //Para declarar variables STATE
    state = { 
        velocidad: 0,  
        estado: false,  
        coche: { 
            marca: "Audi", 
            modelo: "Q8" 
        } 
    }
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
                /** Para acceder a variables STATE*/
                {this.state.velocidad} 
                {this.state.coche.marca} 
                <button onClick={this.incremento}
                >Incrementar</button>
            </div>
        )
    }
}

export default Contador;