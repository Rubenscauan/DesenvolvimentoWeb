import { IconButton, Table, TableBody, Box, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Listar = () => {

    const navigate = useNavigate();
    const [professores, setProfessores] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3001/professor/listar")
                .then(
                    (response) => {
                        setProfessores(response.data);
                    }
                )
                .catch(error => alert(error))

        }, []
    )

    function deleteProf(id) {
        if (window.confirm('Deseja Deletar?')) {
            axios.delete('http://localhost:3001/professor/deletar/' + id)
                .then(
                    (response) => {
                        const resultado = professores.filter(professores => professores.id != id)
                        setProfessores(resultado)
                    })
                .catch(error => alert(error))
        }

    }

    return (
        <>
            <Typography variant="h5" fontWeight='bold'>Listar Professor</Typography>
            <TableContainer component={'Paper'}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>TITULAÇÃO</TableCell>
                            <TableCell>EFEITOS</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {professores.map(
                            (professor) => {
                                return (
                                    <TableRow>
                                        <TableCell>{professor._id}</TableCell>
                                        <TableCell>{professor.nome}</TableCell>
                                        <TableCell>{professor.curso}</TableCell>
                                        <TableCell>{professor.titulacao}</TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton
                                                    arial-label='delete'
                                                    color='primary'
                                                    onClick={() => deleteProf(professor._id)}
                                                >
                                                    <DeleteIcon />

                                                </IconButton>
                                                <IconButton
                                                    arial-label='edit'
                                                    color='primary'
                                                    component={Link}
                                                    to={`/editarProfessor/${professor._id}`}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Listar;