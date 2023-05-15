import { useState } from "react";

const Vendedor = () =>{
    const [nomes,setNomes] = useState([""])
    return(
        <div>
            <h1>{nomes}</h1>
            <input id = "Vendedor" placeholder="Nome"></input>
        </div>
    )
}

export default Vendedor;