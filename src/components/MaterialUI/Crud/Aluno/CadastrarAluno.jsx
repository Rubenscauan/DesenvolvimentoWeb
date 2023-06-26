import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CadastrarAluno = () => {

    const navigate = useNavigate()

    const[nome,setNome] = useState('');
    const[ira, setIra] = useState("0.0");
    const[curso,setCurso] = useState('');

    const handleCadastro = (event) =>{
        event.preventDefault();
        const novoAluno = {nome,curso,ira};
        axios.post("http://localhost:3001/alunos/registrar", novoAluno)
            .then(
                (res)=>{
                    alert('aluno ' + res.data.nome + " cadastrado")
                    navigate("/listarAluno")
                }
            ).catch(error=> alert(error))
    }

    return(
        <>
            <Typography variant = "h5" fontWeight="bold">Cadastrar Aluno</Typography>
            <Box
                component="form"
                onSubmit={handleCadastro}
            >

                <TextField
                    margin="normal"
                    fullWidth
                    label="Nome"
                    required
                    autoFocus
                    id="nomeDoAluno"
                    onChange={(event)=>{setNome(event.target.value)}}
                />


                <FormControl fullWidth sx={{mt:2}}>       
                    <InputLabel id="select-curso-aluno" required>Curso</InputLabel>
                    <Select 
                        labelId="select-curso-aluno" 
                        label="curso"
                        required
                        onChange={(event)=>setCurso(event.target.value)}
                    >
                        <MenuItem value="SI">Sistemas de informação</MenuItem>
                        <MenuItem value="CC">Ciencias da computação</MenuItem>
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="ES">Engenharia de Software</MenuItem>
                        <MenuItem value="EC">Engenharia da computação</MenuItem>
                        <MenuItem value="RC">Redes de Computadores</MenuItem>
                    </Select>

                    <TextField
                    margin="normal"
                    fullWidth
                    label="Ira Do Aluno"
                    id="ira"
                    name='ira'
                    type='number'
                    inputProps={{
                        maxLength: 10,
                        step: '0.1'
                    }}
                    onChange={(event)=>{setIra(parseFloat(event.target.value))}}
                />

                </FormControl>
            <Box sx={{mt:2, display:"flex", justifyContent:"center"}}>
                <Button variant="contained" type="submit"> Cadastrar </Button>

            </Box>

            </Box>
        </>
    )
}

export default CadastrarAluno;