import { useContext } from "react";
import CorContexto from "./Contexto";
import D from "./D";

const B = () =>{
    const cor = useContext(CorContexto)
    /*Modo Atual*/
    return(
        <div>
            <h1 style={{backgroundColor:cor}}>B</h1>
            <D/>
        </div>
    )
}

export default B;