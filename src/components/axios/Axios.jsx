import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Axios = () =>{
    const[id, setId] = useState(1);
    const[nome,setNome] = useState("");
    const[imagem,setImagem] = useState("");

    useEffect(
        ()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            
            .then(
                (response) => {
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                }
            )

            .catch(
                (error)=>console.log(error)
            )
        },
        [id]

    )
    
    return(
        <>
            <h2>Nome: {nome}</h2>
            <img src={imagem} style={{width:400}}/>
            
            <button onClick={
                ()=>{
                    setId((prev)=>prev-1)
                }
            }>
                Pokemon Anterior
            </button>

            <button onClick={
                ()=>{
                    setId((prev)=>prev+1)
                }
            }>
                Proximo Pokemon
            </button>
        </>
    )
}

export default Axios;
