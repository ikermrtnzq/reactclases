import {Component} from "react"
import HijoDeportes from "./HijoDeportes"
class PdreDeportes extends Component {
    deportes = ["Pesca", "Danza", "Patinaje sobre hielo", "Gimnasia"]

    state ={
        favorito: ""
    }

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado
        })
    }
    render(){
        return(
            <div>
                <h1>Padre Deporte</h1>
                <h2>Su deporte favorito es: {this.state.favorito}</h2>
                {
                    this.deportes.map((sport, index) => {
                        return(<HijoDeportes nombre={sport} key ={index} mostrarFavorito={this.mostrarFavorito}/>)
                    })
                }         
            </div>
        )
    }
}

export default PdreDeportes