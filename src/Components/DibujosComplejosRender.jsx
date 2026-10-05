import {Component} from "react"
class DibujosComplejosRender extends Component {

    state = {
        nombres: ["Mara", "Sofia", "Juan"]
    }

    generarNombres = () => {
        //AÑADIMOS
        this.state.nombres.push("Marcos")

        //Es ncesrio hacer setState para ACTUALIZAR 
        this.setState({
            'nombres' : this.state.nombres
        })
    }

    render(){
        return(
            <div>
                <h1>Dibujo con render</h1>
                <button onClick = {this.generarNombres}>generar</button>
                {
                    this.state.nombres.map((nombre, index) => {
                        return(<h3 key={index}> {nombre}</h3>)
                    })   
                }
            </div>

        )
    }
}

export default DibujosComplejosRender