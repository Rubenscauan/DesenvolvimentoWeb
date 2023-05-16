import { useRef, useState } from "react";

const Questao02 = () =>{

    const [imagem, setImagem] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png")
    //o use state foi usado para manter a variavel e ter a possibilidade de usar o setImagem
    //que torna mais facil a alteração da imagem
    const shiny = useRef(true); //uso o useref para ser a flag pois é mais facil de controlar o false e true por conta do current
    
    const virarpokemon = () =>{
        shiny.current = !shiny.current;
        //essa negação eh basicamente a parte principal do codigo
        // se o estado atual do ref for true ele fica normal
        // se nao ele fica shiny
        if(shiny.current == true)
            setImagem("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png")
        else
            setImagem("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png")
        
    }
    

    return(
        <>
            <h1>Questao02</h1>
            <img src={imagem} width="300px"/>
            <button onClick={virarpokemon}>Shiny</button>
        </> 
    )
}

export default Questao02;