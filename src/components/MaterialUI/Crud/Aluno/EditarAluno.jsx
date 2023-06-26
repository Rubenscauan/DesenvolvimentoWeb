import { Box, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const CadastrarAluno = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    const[nome,setNome] = useState('');
    const[ira, setIra] = useState("0.0");
    const[curso,setCurso] = useState('');


    useEffect(
        ()=>{
            axios.get('http://localhost:3001/alunos/recuperar/' + id)
            .then(
                (response) => {
                    setNome(response.data.nome)
                    setIra(response.data.ira)
                    setCurso(response.data.curso)
                }
            )
            .catch(error => alert(error))
        },[id]
    )

    const handleCadastro = (event) =>{
        event.preventDefault();
        const alunoAtt = { nome, curso, ira }
        axios.put('http://localhost:3001/alunos/atualizar/' + id, alunoAtt)
            .then(
                ()=>{
                    alert('Aluno id ' + id + ' editado com sucesso')
                    navigate('/listarAluno')
                }
            )
            .catch(error => alert(error))
    }

    return(
        <>
            <Typography variant = "h5" fontWeight="bold">Editar Aluno</Typography>
            <Box
                component="form"
                onSubmit={handleCadastro}
            >

                <TextField
                    margin="normal"
                    fullWidth
                    label="Nome"
                    required
                    value={nome}
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
                        value={curso}
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
                    value={ira}
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