import { useEffect, useState } from "react"

const correntistas= [
    { nome: "Sicrano", aplic: {pp: 856.4, rf: 50.4, cc: 34.0} },
    { nome: "Beltrano", aplic: {pp: 0.0, rf: 700.67, cc: 800} },
    { nome: "Fulano", aplic: {pp: 5000.00, rf: 0.0, cc: 500} }
    ];
    
export const Questao01X = () => {
    const [medias, setMedias] = useState();
    const [render, setRender] = useState();
    function chamarMedias(medias){ 
        // Essa function serve para acessar os dados do filho
        //ja que o filho nao pode se comunicar com props pelo pai
        setMedias(medias);
    }

    useEffect(() => {
        if(medias){
            //isso  é a função que pega o dado com a maior media
            var name = medias.map((x, r) => 
                {
                    let n = Math.max(...medias)
                    if(x == n){
                        return correntistas[r].nome
                    }
                }
            )
            setRender(() => {
                return (
                    //essa função serve para renderizar os dados e alterar a render criada no começo 
                    <div>
                        {name}
                    </div>
                )
            })
        }
    }, medias)

    return(
        <div>
            <Questao01Y correntistas={correntistas} comunicacao={chamarMedias} ></Questao01Y>
            <h1>{render}</h1>
        </div>
    )
}
const Questao01Y = (props) => {
    useEffect(() => {[

    ]
        let { correntistas, comunicacao } = props;
        let media_aplicacoes = [];

        //isso serve para mapear os elementos do array
        correntistas.map((element) => {
            let {pp, rf, cc} = element.aplic;
            media_aplicacoes.push((pp+rf+cc)/3); // calcula as medias 
        });
        comunicacao(media_aplicacoes)
    }, [])
    return(
        <div>
        </div>
    )
}