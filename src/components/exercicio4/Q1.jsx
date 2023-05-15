const promiseQ1 = new Promise(
    (resolve,reject) =>{
        setTimeout(
            ()=>{
                const myInt = Math.floor(Math.random() * 10) + 1
                if(myInt == 1){
                    reject("Erro de conexão")
                }else if(myInt == 2){
                    reject("Erro de dados invalidos")
                }else 
                    resolve("Ok")

            },3000
        )
    }

)


const Q1 = () =>{
    
    return(<></>)
}

export default Q1;