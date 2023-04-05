import CorContexto from "./Contexto";

const D = () =>{
    return(
        /*Modo Legado*/
    <CorContexto.Consumer>
            {
                (cor)=>{
                return(
                    <div>
                        <h1 style={{backgroundColor: cor}}>D</h1>
                    </div>
                )
                }
            }
        </CorContexto.Consumer>
    )
}

export default D;