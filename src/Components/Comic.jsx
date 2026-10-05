import {Component} from "react"
class Comic extends Component{
    mandar = () => {
        this.props.seleccionarComic(this.props.comic)
    }
    eliminar = () => {
        this.props.deleteComic(this.props.index)
    }
    render(){
        return(
            <div>
                <h2>{this.props.comic.titulo}</h2>
                <img src={this.props.comic.imagen} style={{width:"60px", height: "80px"}}></img>
                <button onClick={() => this.props.seleccionarComic(this.props.comic)}>Seleccionar como favorito</button>
                <button onClick={() => this.props.deleteComic(this.props.index)}>eliminar</button>

            </div>
        )
    }

}
export default Comic