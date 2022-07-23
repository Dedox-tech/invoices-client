import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import phone from "../images/cellPhone.png";
import pie from "../images/pie-chart.png";
import arrow from "../images/arrow-chart.png";
import squares from "../images/squares.png";
import NavBar from "../components/NavBar";
import "../styles/Home.css";

export default function Home() {
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate("/auth");
    };

    return (
        <Box>
            <NavBar />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    backgroundColor: "#fff1d7",
                    height: "fill",
                }}
            >
                <Grid container sx={{ mt: 10 }}>
                    <Grid item xs={5}>
                        <Container sx={{ ml: 5, mb: 5 }}>
                            <Typography variant="h4" mb={3}>
                                La app que se encarga de tus facturas
                            </Typography>
                            <Typography
                                variant="body1"
                                color="initial"
                                paragraph
                            >
                                Administrar el dinero puede ser complicado. No
                                lo hagas solo. Nuestra app te ayudará a ahorrar
                                más, gastar menos, ver todos tus movimientos y
                                tomar el control de tu vida financiera.
                            </Typography>
                            <Button variant="contained" onClick={handleClick}>
                                Sign in <ArrowRightAltIcon sx={{ ml: 1 }} />
                            </Button>
                        </Container>
                    </Grid>
                    <Grid item xs={7} sx={{ position: "relative" }}>
                        <figure className="phone-home">
                            <img src={phone} alt="cellphone" />
                        </figure>
                        <figure className="pie-chart-home">
                            <img src={pie} alt="pie-chart" />
                        </figure>
                        <figure className="arrow-home">
                            <img src={arrow} alt="arrow" />
                        </figure>
                        <figure className="squares-home">
                            <img src={squares} alt="square" />
                        </figure>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
