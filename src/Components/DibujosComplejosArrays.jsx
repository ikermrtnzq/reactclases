
import  {Component}  from "react";

class DibujosComplejosArrays extends Component {

    dibujarNumeros = ()  => {
        //DECLARAR ARRAYS
        let lista =[];
        for(let i = 1; i<= 7; i++){
            var num= parseInt(Math.random()*120)+1
            lista.push(<li>key {i}, {num}</li>)
        }
        return lista;
    }
    render() {
        return(
            <div>
                <h1>Dibujos Complejos</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
                {
                    
                }
            </div>
        )
    }

}

export default DibujosComplejosArrays