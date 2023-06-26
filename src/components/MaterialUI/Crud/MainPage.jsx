import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container} from "@mui/material";
import {MyMenuV1} from "./MyMenuV1"
import Cadastrar from "./Professor/Cadastrar";
import Editar from "./Professor/Editar";
import Listar from "./Professor/Listar"
import CadastrarAluno from "./Aluno/CadastrarAluno";
import ListarAluno from "./Aluno/ListarAluno";
import EditarAluno from "./Aluno/EditarAluno"


const MainPage = () => {
    return(
        <BrowserRouter>
            <MyMenuV1/>
            <Container sx={{mt:12}}>
                <Routes>
                    <Route path= "cadastrarProfessor" element={<Cadastrar/>}/>
                    <Route path= "listarProfessor" element={<Listar/>}/>
                    <Route path= "editarProfessor/:id" element={<Editar/>}/>
                    <Route path= "cadastrarAluno" element={<CadastrarAluno/>}/>
                    <Route path= "listarAluno" element={<ListarAluno/>}/>
                    <Route path= "editarAluno/:id" element={<EditarAluno/>}/>
                </Routes>

            </Container>
        </BrowserRouter>
    )
}

export default MainPage;