import B from "./B";
import C from "./C";

import CorContexto from "./Contexto";

const A = () =>{
    const cor = "red"
    return(
        <CorContexto.Provider value ={cor}>
            <div >
                <h1 style={{backgroundColor: cor}}>A</h1>
                <h1><B /></h1>
                <h1><C /></h1>
            </div>
        </CorContexto.Provider>
    )
}

export default A;