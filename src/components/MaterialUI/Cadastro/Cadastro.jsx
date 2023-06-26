import { Container, Typography, Box, TextField, Button, Link } from "@mui/material";

const Cadastro=()=>{
    return(
        <Container maxWidth="xs">
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    mt:"10"
                }}
            >
                <Typography component="h1" variant = "h5">
                    Login
                </Typography>

                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "email"
                    label = "Endereço de email"
                    name = "email"
                    autoComplete = "email"
                    autoFocus
                />

                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "senha"
                    label = "Senha"
                    name = "senha"
                    type = "password"
                />

                <Button
                    type = "submit"
                    fullWidth
                    variant = "contained"
                    sx = {{mt:3, mb: 2}}
                >
                    Login
                </Button>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100%"
                >
                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        Esqueceu a Senha?
                    </Link>

                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        Realizar cadastro
                    </Link>
                </Box>



            </Box>
        </Container>
    )
}

export default Cadastro;