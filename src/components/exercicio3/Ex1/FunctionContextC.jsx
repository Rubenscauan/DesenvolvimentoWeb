import { useContext } from "react";
import CorContexto from "./context/Context";

const FunctionContextC = () => {
    const cores = useContext(CorContexto)
    return(
        <div>
            <h1 style={{backgroundColor:cores.bkgC}}>Hello i am function C</h1>
        </div>
    )
}

export default FunctionContextC;