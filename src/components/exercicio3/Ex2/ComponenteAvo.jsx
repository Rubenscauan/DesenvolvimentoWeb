import { Context } from "react";
import PokemonContexto from "./Context";
import ComponentePai from "./ComponentePai";


const ComponenteAvo = () =>{
    const numero = 1;
    return(
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Avo</h1>
                <img 
                    src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}/>
                    <ComponentePai/>
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo;