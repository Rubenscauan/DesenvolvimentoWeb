import { IconButton, Table, TableBody, Box, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const ListarAluno = () => {
    const [alunos,setAlunos] = useState([])
    const [media,setMedia] = useState()
    


    useEffect(
        () => {
            axios.get("http://localhost:3001/alunos/listar")
                .then(
                    (response) => {//Usamos o useEffect para sempre atualizar quando é adicionado uma nova Pessoa
                        setAlunos(response.data);
                        let aux = 0
                        //Esse aux é a media que ainda nao foi passada
                        for(let i = 0 ; i < alunos.length; i++){
                            aux += alunos[i].ira; 
                        }
                        aux = aux / alunos.length;
                        //pos o calculo setamos esse aux como a media do usestate
                        setMedia(aux);
                    }
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
            <Typography variant="h5" fontWeight='bold'>Listar Aluno</Typography>
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
                            (aluno)=>{
                                if(aluno.ira < media) // se a media for menor entao o back ground eh red
                                return(
                                    <TableRow style={{backgroundColor:"red"}}>
                                        <TableCell >{aluno.nome}</TableCell>
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
                                else // se nao é simplismente uma listagem padrao
                                    return(
                                        <TableRow >
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
                            <TableCell>Media do ira = {media}</TableCell>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListarAluno;