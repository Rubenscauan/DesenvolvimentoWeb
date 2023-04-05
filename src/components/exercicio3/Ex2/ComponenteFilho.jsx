import { useContext } from "react";
import PokemonContexto from "./Context";

const ComponenteFilho = () =>{
    const numero = useContext(PokemonContexto);
    return(
        <div>
            <h1>Filho</h1>
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}/>
        </div>
    )
}

export default ComponenteFilho;