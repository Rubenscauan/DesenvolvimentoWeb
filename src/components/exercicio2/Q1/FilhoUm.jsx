const FilhoUm = ({Peso,Altura}) => {
    const imc = Peso / (Altura*Altura);

    const renderizar = (imc) =>{
        if(imc < 18){
            return(
                <h1>Abaixo do peso</h1>
            )
        }if(imc > 25){
            return(
                <h1>Acima do peso</h1>
            )
        }return(
            <h1>Peso Ideal</h1>
        )
    }

    return(
        renderizar(imc)
    )
}

export default FilhoUm;