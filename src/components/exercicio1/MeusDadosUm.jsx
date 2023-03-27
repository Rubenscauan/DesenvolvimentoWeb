import { Component } from "react"
const MeusDadosUm =() => {
    function ChamarNome(){
        return(
            <div>
                <h1>Rubens Cauan Figueredo de Castro</h1>
                <h1>Sistemas de informação</h1>
                <h1>Universidade federal do Ceará</h1>
            </div>
        )
    }

    const ChamarNomeDois = ()=>{
        return(
            <div>
                <h1>Rubens Cauan Figueredo de Castro</h1>
                <h1>Sistemas de informação</h1>
                <h1>Universidade federal do Ceará</h1>
            </div>
        )
    }
    
    const ChamarNomeTres = ()=>{
        <div>
            <h1>Rubens Cauan Figueredo de Castro</h1>
            <h1>Sistemas de informação</h1>
            <h1>Universidade federal do Ceará</h1>
        </div>
    }

    class ChamarNomeQuatro extends Component{
        render(){
            return(
                <div>
                    <h1>Rubens Cauan Figueredo de Castro</h1>
                    <h1>Sistemas de informação</h1>
                    <h1>Universidade federal do Ceará</h1>
                </div>
            )
        }
    }
    



    return(
        <div>
            <h1>Questão 1</h1>
            <h1>{ChamarNome()}</h1>
            <h1>{ChamarNomeDois()}</h1>
            <h1>{ChamarNomeTres()}</h1>
            <h1>{ChamarNomeQuatro()}</h1>
        </div>
    )
}

export default MeusDadosUm;