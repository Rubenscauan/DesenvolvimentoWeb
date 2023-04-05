import { useContext } from "react";
import ComponenteFilho from "./ComponenteFilho";
import PokemonContexto from "./Context";

const ComponentePai = () =>{
    const numero = useContext(PokemonContexto);
    return(
        <div>
            <h1>Pai</h1>
            <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`}/>
            <ComponenteFilho/>
        </div>
    )
}

export default ComponentePai;