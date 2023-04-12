import { useState, useEffect } from "react";
//let Cidades = {Quixeramobim:0,Quixada:0,Fortaleza:0,Sobral:0}

const Tela = () =>{
    const[Quixeramobim, setQuixeramobim] = useState(0);
    const[Quixada, setQuixada] = useState(0);
    const[Sobral, setSobral] = useState(0);
    const[Fortaleza, setFortaleza] = useState(0);
    const[Menos, setMenos] = useState("");
    const[Mais, setMais] = useState("");


    useEffect(
        ()=>{
            let cidades = [Quixeramobim,Quixada,Fortaleza,Sobral];
            let nomes = ["Quixeramobim","Quixada","Fortaleza","Sobral"];
            let maior = cidades[0];
            let menor = cidades[0];

            for(let i = 0; i < cidades.length; i++){
                if(cidades[i] > maior) maior = cidades[i];
                if(cidades[i] < menor) menor = cidades[i];
            }
            setMais("");
            setMenos("");
            for(let i = 0; i < cidades.length; i++){
                if(cidades[i] === maior) setMais((anterior)=>anterior + " " + nomes[i])
                if(cidades[i] === menor) setMenos((anterior)=>anterior + " " + nomes[i])
            }
            
        },
        [Quixeramobim,Quixada,Sobral,Fortaleza])
   

    return(
        <div>
            <div>
                <h1>Quixeramobim : {Quixeramobim} 
                <button class = "botao" onClick={()=> setQuixeramobim(Quixeramobim+1)} >Votar Quixeramobim</button>
                </h1>

                <h1>Quixada: {Quixada}
                <button class = "botao" onClick={()=> setQuixada(Quixada+1)}>Votar Quixada</button>
                </h1>

                <h1>Sobral: {Sobral}
                <button class = "botao" onClick={()=> setSobral(Sobral+1)}>Votar Sobral</button>
                </h1>

                <h1>Fortaleza: {Fortaleza}
                <button class = "botao" onClick={()=> setFortaleza(Fortaleza+1)}>Votar Fortaleza</button>
                </h1>
                
            </div>

            <div>
                <h1>Resultados</h1>
                <h1>Mais votado: {Mais}</h1>
                <h1>Menos votado: {Menos}</h1>
            </div>
            
        </div>
        
        )
    
    }
    
    
    

export default Tela;