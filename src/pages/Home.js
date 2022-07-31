/* eslint-disable no-console */
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "mui-image";
import Phone from "../images/Phone.svg";
import NavBar from "../components/NavBar";

export default function Home() {
    const session = useSessionContext();
    const { doesSessionExist } = session;

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("La sesion existe", doesSessionExist);
        if (doesSessionExist) {
            navigate("/invoices");
        } else {
            navigate("/auth");
        }
    };

    return (
        <Box>
            <NavBar />
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    sx={{
                        mt: { md: 7, xs: 3 },
                        mb: { xs: 5, md: 0 },
                        px: { xs: 2, md: 5, lg: 0 },
                    }}
                >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" mb={4} fontWeight={400}>
                            Conoce la App que se encarga de tus facturas
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            paragraph
                            lineHeight={1.75}
                            fontSize="large"
                            sx={{ mt: 2 }}
                        >
                            Administrar el dinero puede ser complicado. Déjanos
                            acompañarte, no lo hagas solo.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            paragraph
                            lineHeight={1.75}
                            fontSize="large"
                            sx={{ mt: 2 }}
                        >
                            Nuestra app te ayudará a ahorrar más, gastar menos,
                            ver todos tus movimientos y tomar el control de tu
                            vida financiera.
                        </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            paragraph
                            lineHeight={1.75}
                            fontSize="large"
                            sx={{ mt: 2 }}
                        >
                            ¿Qué esperas para empezar?
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Iniciar ahora
                            <ArrowRightAltIcon sx={{ ml: 1 }} />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        justifyContent="center"
                        sx={{
                            p: 2,
                            mt: { xs: 5, md: 0 },
                            mb: { xs: 5, md: 0 },
                        }}
                    >
                        <Image
                            src={Phone}
                            showLoading
                            fit="contain"
                            sx={{ p: { md: 5 } }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
