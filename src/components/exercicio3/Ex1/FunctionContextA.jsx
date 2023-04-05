import CorContexto from "./context/Context";
import FunctionContextB from "./FunctionContextB";
import FunctionContextC from "./FunctionContextC";

const cores = {bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue"};

const FunctionContextA = () => {
    return (
         <CorContexto.Provider value={cores}>
            <div>
                <h1 style={{backgroundColor:cores.bkgA}}>Hello i am Function A</h1>
                <FunctionContextB/>
                <FunctionContextC/>
            </div>
         </CorContexto.Provider>
    )
}

export default FunctionContextA;