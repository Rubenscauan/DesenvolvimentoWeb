import Imagem from "./Imagem";
import BotaoIncrementar from "./BotaoIncrementar";
import BotaoVoltar from "./BotaoVoltar";
import { useState } from "react";

const TelaPrincipal = () => {

    const [id, setId] = useState(130);

    const incrementar = () =>{
        setId((prev) => prev+1);
    }           
    
    const decrementar = () => {
        setId((prev)=>prev-1)
    }

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                        <Imagem id={id} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar}/>
                        </td>
                        <td>
                            <BotaoVoltar decrementar={decrementar}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TelaPrincipal;