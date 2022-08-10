import React from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import office from "../images/office.jpg";
import diego from "../images/Diego-Murillo.jpg";
import hector from "../images/Hector-Muñoz.jpg";

export default function ContactInfo() {
    return (
        <Grid sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    backgroundImage: `url(${office})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: { xs: "200px", md: "100vh" },
                    opacity: "80%",
                }}
            >
                <Typography
                    component="h1"
                    sx={{
                        position: "absolute",
                        zIndex: "10",
                        top: { xs: "50%", md: "10%" },
                        left: { xs: "50%", md: "50%" },
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        fontSize: { xs: "25px", md: "35px" },
                        fontWeight: "700",
                        color: "white",
                    }}
                >
                    ¿Hay algún problema?
                    <Typography
                        component="h2"
                        sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "30px" },
                            fontWeight: "700",
                            color: "white",
                        }}
                    >
                        Contactanos
                    </Typography>
                </Typography>
            </Box>
            <Box
                sx={{
                    position: { xs: "relative", md: "absolute" },
                    top: { md: "50%" },
                    left: { md: "50%" },
                    transform: { md: "translate(-50%, -50%)" },
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Card sx={{ maxWidth: { xs: 350 }, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={diego}
                            alt="diego"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Diego Murillo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Desarrollador Front-End con conocimientos en el
                                ecosistema de React. Me gusta construir
                                aplicaciones web de alta calidad que sean
                                fáciles de utilizar para los usuarios. Soy
                                estudiante de Administración Industrial de la
                                Universidad de Cartagena, Colombia.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton size="large">
                            <Link href="https://www.linkedin.com/in/diego-murillo-ferrer-a5b80515a/">
                                <LinkedInIcon />
                            </Link>
                        </IconButton>
                        <IconButton size="large">
                            <Link href="https://github.com/Dedox-tech">
                                <GitHubIcon />
                            </Link>
                        </IconButton>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: { xs: 350 }, margin: "10px" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={hector}
                            alt="hector"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Hector Muñoz
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Fugiat nulla nostrum deserunt
                                explicabo nesciunt ab fuga iste quaerat eligendi
                                tempore numquam illo hic rem porro, culpa,
                                aperiam eum similique dolorum. Lorem ipsum dolor
                                consectetur.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton size="large">
                            <Link href="https://www.linkedin.com/in/hector-muz-mos/">
                                <LinkedInIcon />
                            </Link>
                        </IconButton>
                        <IconButton size="large">
                            <Link href="https://github.com/Hector-MuMo">
                                <GitHubIcon />
                            </Link>
                        </IconButton>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    );
}
