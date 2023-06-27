import { IconButton, Table, TableBody, Box, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const ListarAlunoAprovado = () => {
    const [alunos,setAlunos] = useState([])
    const [media, setMedia] = useState()

    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/listar")
                .then(
                    (response) => {
                        setAlunos(response.data);
                        console.log(alunos)
                        let aux = 0
                        //mesmo codigo copiado da 1 que calcula a media
                        for(let i = 0 ; i < alunos.length; i++){
                            aux += alunos[i].ira; 
                        }
                        aux = aux / alunos.length;
                        setMedia(aux);
                    } // de resto é o mesmo codigo da listagem normal so mudando na filtragem
                )
                .catch(error => alert(error))

        }, [media]
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
            <Typography variant="h5" fontWeight='bold'>Listar Alunos Aprovados</Typography>
            <TableContainer component={'Paper'}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableHead>
                        <TableRow>
                            <TableCell>NOME</TableCell>
                            <TableCell>CURSO</TableCell>
                            <TableCell>IRA</TableCell>
                            <TableCell>EFEITOS</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {alunos.map(
                            (aluno)=>{//aqui fazemos a filtragem, se o aluno estiver acima da media ele aparece
                                if(aluno.ira > media) 
                                return(
                                    <TableRow>
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

export default ListarAlunoAprovado;