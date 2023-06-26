import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Cadastrar = () => {

    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [titulacao, setTitulacao] = useState("GRAD");

    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        const novoProfessor = { nome, curso, titulacao };
        axios.post("http://localhost:3001/professor/registrar", novoProfessor)
            .then(
                (response) => {
                    alert(`professor ID ${response.data._id} adicionado`)
                    navigate("/listarProfessor")
                }
            )
            .catch(error => alert(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
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
                    autoFocus
                    onChange={(event) => setNome(event.target.value)}
                />


                <FormControl fullWidth>
                    <InputLabel id="select-curso-professor" required>Curso</InputLabel>
                    <Select
                        labelId="select-curso-professor"
                        label="curso"
                        required
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

                {/*<FormControl component="fieldset" variant="standart" sx={{mt:2,ml:2}}>
                    <FormLabel component="legend" sx={{fontSize:12, mb:2}}>
                        Areas de interesse
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox name="es" checked={ai.es} onChange={handleCheckbox}/>} label="Engenharia de Software"/>
                        <FormControlLabel control={<Checkbox name="al" checked={ai.al} onChange={handleCheckbox}/>} label="Algoritmos"/>
                        <FormControlLabel control={<Checkbox name="ds" checked={ai.ds} onChange={handleCheckbox}/>} label="Desenvolvimento de software"/>
                        <FormControlLabel control={<Checkbox name="mc" checked={ai.mc} onChange={handleCheckbox}/>} label="Matematica Computacional"/>

                    </FormGroup>
                </FormControl>*/}

                <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 2 }}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>



        </>
    )
}


export default Cadastrar;