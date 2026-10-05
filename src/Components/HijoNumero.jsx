import {Component} from "react"
class HijoNumero extends Component {

    mandar = () => {
        this.props.sumar(this.props.numero)
    }

    render() {
        return(
            <div>
                <h1>Numero: {this.props.numero}</h1>
                <button onClick={this.mandar}>Sumar</button>
            </div>
        )
    }
}
export default HijoNumero