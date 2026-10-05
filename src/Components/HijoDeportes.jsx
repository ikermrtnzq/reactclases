import {Component} from "react"
class HijoDeportes extends Component {

    state ={
        mensaje: ""
    }

    seleccionarFavorito = () => {
        this.props.mostrarFavorito(this.props.nombre)
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.nombre}</h2>
                <button onClick ={this.seleccionarFavorito} >FAV</button>
            </div>
        )
    }
}

export default HijoDeportes