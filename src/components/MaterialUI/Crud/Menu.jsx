import { AppBar, Button, Container, Toolbar, Typography, Box } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb"

const Menu = () => {
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            ml: 1,
                            fontFamily: "monospace",
                            fontWeigth: 700,
                            latterSpacing: ".2rem",
                            color: "white",
                            textDecoration: "none"

                        }}
                    >
                        CRUD
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flex: 1,
                            ml: 3,
                        }}
                    >
                        <Button sx={{ my: 2, color: "white" }}>
                            Professores
                        </Button>

                        <Button sx={{ my: 2, color: "white" }}>
                            Alunos
                        </Button>

                        <Button sx={{ my: 2, color: "white" }}>
                            Sobre
                        </Button>
                    </Box>

                </Toolbar>

            </Container>
        </AppBar>
    )
}

export default Menu;