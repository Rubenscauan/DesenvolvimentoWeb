import FilhoUm from "./FilhoUm";

const PaiUm = ({Peso,Altura}) => {
    return(
        <div>
            <h1>
                <FilhoUm Peso={Peso} Altura={Altura}/>
            </h1>
        </div>
    )
}

export default PaiUm;