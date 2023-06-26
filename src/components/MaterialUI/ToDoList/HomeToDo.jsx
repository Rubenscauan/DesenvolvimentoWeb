import { Container, TextField, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import ToDoItem from "./ToDoItem"; 


const HomeToDo = () =>{
    const [tarefa,setTarefa] = useState("")
    return(
        <Container maxWidth="xs" >
            <Typography>To Do List</Typography>
            <Box >
                <TextField
                    label="Tarefa"
                    margin="normal"
                    name="tarefa"
                    id="tarefa"
                    autoFocus
                    fullWidth
                    onChange={(text) => setTarefa(text.target.value)}
                />
                <Button variant="contained" fullWidth onClick={()=>alert(tarefa)}>
                    Send
                </Button>
                <ToDoItem />
            </Box>
        </Container>
    )
}

export default HomeToDo;