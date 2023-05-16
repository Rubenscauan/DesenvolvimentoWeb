import { useEffect, useState } from "react"

const Questao03 = () => {

    //useState para salvar a variavel

    const [cidades, setCidades] = useState([])

    useEffect(
        () => {
            fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                .then(
                    (response) => {
                        return response.json()
                    }
                )
                .then(
                    (data) => {
                        //isso serve para calcular a media
                        let media;
                        for(let i = 0; i < data.length;i++){
                            media = data[i].population;
                        }
                        media = media/data.length

                        let cidades = [];

                        //apos calcular a media a gente salva as cidades que tem a 
                        //população maior que a media em uma variavel

                        for(let i = 0; i < data.length;i++){
                            if(data[i].population > media)
                                cidades.push(data[i].capital);
                        }

                        //apos isso salvamos essas cidades no setCidades do use State la de cima
                        setCidades(cidades)
                        
                        
                       
                       
                    }
                )
                //parte da estrutura basica do fetch
                .catch(error => console.log(error))

        }
        ,
        []
    )

    return (
        <>
            <h1>Cidades : {cidades}</h1>        
        </>
    )
}

export default Questao03;