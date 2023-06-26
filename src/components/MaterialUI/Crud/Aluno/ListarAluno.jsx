import { IconButton, Table, TableBody, Box, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const ListarAluno = () => {
    const [alunos,setAlunos] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/listar")
                .then(
                    (response) => {
                        setAlunos(response.data);
                    }
                )
                .catch(error => alert(error))

        }, []
    )

    const deleteAluno = (id) =>{
        if(window.confirm("Deseja Deletar ?")){
            axios.delete("http://localhost:3001/alunos/deletar/" + id)
            .then(
                (res) =>{
                    const resultado = alunos.filter(alunos=>alunos.id != id)
                    setAlunos(resultado)
                }
            ).catch(error => alert(error))
        }
    }

    return(
        <>
            <Typography variant="h5" fontWeight='bold'>Listar Aluno</Typography>
            <TableContainer component={'Paper'}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>IRA</TableCell>
                            <TableCell>EFEITOS</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {alunos.map(
                            (aluno)=>{
                                return(
                                    <TableRow>
                                        <TableCell>{aluno._id}</TableCell>
                                        <TableCell>{aluno.nome}</TableCell>
                                        <TableCell>{aluno.curso}</TableCell>
                                        <TableCell>{aluno.ira}</TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton 
                                                    arial-label='delete' 
                                                    color='primary' 
                                                    onClick={()=>deleteAluno(aluno._id)}
                                                >
                                                    <DeleteIcon/>
                                                </IconButton>
                                                <IconButton 
                                                    arial-label='edit' 
                                                    color='primary' 
                                                    component={Link} 
                                                    to={`/editarAluno/${aluno._id}`}
                                                    >
                                                    <EditIcon/>
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

export default ListarAluno;