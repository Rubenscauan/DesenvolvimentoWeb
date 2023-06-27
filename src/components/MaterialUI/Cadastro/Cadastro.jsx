import { Container, Typography, Box, TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cadastro = ()=> {

    const navigate = useNavigate() // usado para pular para a primeira a listagem
    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()

    const handleEntrar = (Login,Senha) =>{
        if(Login == 'login' && Senha == '123')// nao consegui fazer no express entao fiz essa gambi
            navigate("/listarAluno")
        else //apenas pra mostrar a senha caso queira testar
            alert('senha ou email errado obs: o correto é: login:login senha:123')
    }
    return(
        <Container maxWidth="xs">
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    mt:"10"
                }}
            >
                <Typography component="h1" variant = "h5">
                    Login
                </Typography>

                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "email"
                    label = "Endereço de email"
                    name = "email"
                    autoComplete = "email"
                    autoFocus
                    onChange={(event)=>{setLogin(event.target.value)}}
                />

                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "senha"
                    label = "Senha"
                    name = "senha"
                    type = "password"
                    onChange={(event)=>{setSenha(event.target.value)}}

                />

                <Button
                    type = "submit"
                    fullWidth
                    variant = "contained"
                    sx = {{mt:3, mb: 2}}
                    onClick={()=>{handleEntrar(login,senha)}}//chamada da função
                >
                    Login
                </Button>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100%"
                >
                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        Esqueceu a Senha?
                    </Link>

                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        Realizar cadastro
                    </Link>
                </Box>



            </Box>
        </Container>
    )
}

export default Cadastro;