import CorContexto from "./context/Context";

const FunctionContextB = () => {
    return(
        /*Modo Legado*/
    <CorContexto.Consumer>
            {
                (cores)=>{
                return(
                    <div>
                        <h1 style={{backgroundColor: cores.bkgB}}>Hello i am Function B</h1>
                    </div>
                )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FunctionContextB;