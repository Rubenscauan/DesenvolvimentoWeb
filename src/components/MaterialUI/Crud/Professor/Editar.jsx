import { useParams } from "react-router-dom";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Editar = () => {
    let { id } = useParams()

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulacao, setTitulacao] = useState("");

    const navigate = useNavigate();

    useEffect(
        () => {
            axios.get('http://localhost:3001/professor/recuperar/' + id)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setTitulacao(response.data.titulacao)
                    }
                )
                .catch(error => alert(error))
        }, [id]
    )

    function handleSubmit(event) {
        event.preventDefault();
        const professorAtt = { nome, curso, titulacao }
        axios.put('http://localhost:3001/professor/atualizar/' + id, professorAtt)
            .then(
                ()=>{
                    alert('Professor id ' + id + ' editado com sucesso')
                }
            )
            .catch(error => alert(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome do Professor"
                    value={nome}
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />

<FormControl fullWidth>
                    <InputLabel id="select-curso-professor" required>Curso</InputLabel>
                    <Select
                        labelId="select-curso-professor"
                        label="curso"
                        required
                        value={curso}
                        onChange={(event) => setCurso(event.target.value)}
                    >
                        <MenuItem value="SI">Sistemas de informação</MenuItem>
                        <MenuItem value="CC">Ciencias da computação</MenuItem>
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="ES">Engenharia de Software</MenuItem>
                        <MenuItem value="EC">Engenharia da computação</MenuItem>
                        <MenuItem value="RC">Redes de Computadores</MenuItem>
                    </Select>

                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>

                    <InputLabel id="select-label">Titulação</InputLabel>
                    <Select
                        labelId="select-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>


                <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 2 }}
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Editar;