const Memoria = ({Nome, Preco}) => {
    return(
        <div>
            <h1>Sou 1 Memoria: </h1>
            <h1>Meu Nome é {Nome}</h1>
            <h1>Meu Preço é {Preco}</h1>
        </div>
    )
}

const PlacaMae = ({Nome, Preco}) => {
    return(
        <div>
            <h1>Sou 1 Placa Mãe: </h1>
            <h1>Meu Nome é {Nome}</h1>
            <h1>Meu Preço é {Preco}</h1>
        </div>
    )
}

const PlacaDeVideo = ({Nome, Preco}) => {
    return(
        <div>
            <h1>Sou 1 Placa De Video: </h1>
            <h1>Meu Nome é {Nome}</h1>
            <h1>Meu Preço é {Preco}</h1>
        </div>
    )
}

export {Memoria,PlacaMae,PlacaDeVideo}