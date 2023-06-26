import { AppBar, Button, Container, Toolbar, Typography, Box, Menu, MenuItem } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom";
import { useState } from "react";

export const MyMenuV1= () =>{

    const [anchorElProfessor, setAnchorElProfessor] = useState(null)
    const [anchorElAluno, setAnchorElAluno] = useState(null)

    //AREA DO MENU FLUTUANTE DO PROFESSOR 
    const handleOpenProfMenu = (event) => {
        setAnchorElProfessor(event.currentTarget);
    }
    const handleCloseProfMenu = () =>{
        setAnchorElProfessor(null);
    }
//  ---------------------------------------------

    //AREA DO MENU FLUTUANTE DO ALUNO
    const handleOpenAlunoMenu = (event) => {
        setAnchorElAluno(event.currentTarget);
    }
    const handleCloseAlunoMenu = () => {
        setAnchorElAluno(null);
    }


    const profDropMenu = () =>{
        return(
            <Box>
                {/*AREA DO PROFESSOR */}
                <Button sx={{my:2,color:"white"}}
                onClick={handleOpenProfMenu}
                >
                    Professores
                </Button>
                <Menu 
                    anchorEl={anchorElProfessor} 
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseProfMenu}
                >
                    <MenuItem 
                        onClick={handleCloseProfMenu}
                        component={Link}
                        to={"cadastrarProfessor"}
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>

                    <MenuItem 
                        onClick={handleCloseProfMenu}
                        component={Link}
                        to={"listarProfessor"}>
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
                
                <Button sx={{my:2,color:"white"}}
                onClick={handleOpenAlunoMenu}
                >
                    Alunos
                </Button>
                
                <Menu 
                    anchorEl={anchorElAluno} 
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAlunoMenu}
                >
                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to = "cadastrarAluno"
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to = "listarAluno"
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }


    return(
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon/>
                    <Typography 
                        variant="h5" 
                        component="a" 
                        href="/" 
                        sx={{
                            ml:1,
                            fontFamily:"monospace",
                            fontWeigth:700,
                            latterSpacing:".2rem",
                            color:"white",
                            textDecoration:"none"
                            
                        }}
                        >
                        CRUD V2
                    </Typography>

                    <Box
                        sx={{
                            display:"flex",
                            flex:1,
                            ml:3,
                        }}
                    >
                        {profDropMenu()}

                        <Button sx={{my:2,color:"white"}}>
                            Sobre
                        </Button>
                    </Box>

                </Toolbar>

            </Container>
        </AppBar>
    )
}

