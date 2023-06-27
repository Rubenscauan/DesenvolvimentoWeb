let login = 'login'
let senha = '123'

class LoginService{
    static logar(login, senha){
        if(login == login && senha == senha)
            return {"res":true}
    }
}

module.exports = LoginService