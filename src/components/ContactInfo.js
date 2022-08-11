import React, { useEffect, useState } from "react";
import { object, string } from "yup";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EmailIcon from '@mui/icons-material/Email';
import office from "../images/office.jpg";
import diego from "../images/Diego-Murillo.jpg";
import hector from "../images/Hector-Muñoz.jpg";

export default function ContactInfo() {
    const [isSended, setIsSended] = useState();

    const formik = useFormik({
        initialValues: {
            completeName: "",
            email: "",
            message: ""
        },
        validationSchema: object({
            completeName: string().required("Por favor, ingrese su nombre completo."),
            email: string().email().required("Por favor, ingrese su correo electronico."),
            message: string().required("Por favor, ingrese el mensaje que desea enviar.")
        }),
        onSubmit: (values) => {
            fetch("https://formsubmit.co/ajax/munozmoraleshector@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success === 'true')
                        setIsSended(true)
                    else
                        setIsSended(false)
                })
                .catch(error => {
                    console.log(error)
                    setIsSended(false)
                });

        },
    });


    useEffect(() => {
        if (isSended) {
            setTimeout(() => {
                setIsSended(undefined)
            }, 3000);
        } else {
            setTimeout(() => {
                setIsSended(undefined)
            }, 3000);
        }

        return () => {
            clearTimeout()
        }
    }, [isSended]);

    return (
        <Grid sx={{ position: "relative" }}>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isSended === undefined ?
                null
                : isSended ?
                    <Alert sx={{ zIndex: "200", position: "sticky", top: 0 }} severity="success">
                        <AlertTitle>Enviado</AlertTitle>
                        Se envío correctamente el mensaje.
                    </Alert>
                    :
                    <Alert sx={{ zIndex: "200", position: "sticky", top: 0 }} severity="error">
                        <AlertTitle>Error</AlertTitle>
                        No se pudo enviar el mensaje. Intentalo más tarde.
                    </Alert>
            }
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    backgroundImage: `url(${office})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: { xs: "200px", md: "93vh" },
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
                    ¿Algún problema con la App?
                    <Typography
                        component="p"
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
                    top: { md: "25%" },
                    left: { md: "25%" },
                    transform: { md: "translate(-25%, -25%)" },
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
                            <Typography sx={{ marginBottom: "20px" }} variant="body2" color="text.secondary">
                                Desarrollador Web. Aficionado a la creación y el desarrollo continuo de aplicaciones; mejorando continuamente en los lenguajes y bases de datos que conozco.
                            </Typography>
                            <a href="https://portfolio-hmm.netlify.app/#" target="_blank" rel="noreferrer">Portafolio</a>
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
            <Divider sx={{ my: 5 }} />
            <Box >
                <h3 style={{ textAlign: "center", color: "#1976d2" }}>Para dudas, comentarios o lo que sea</h3>
                <p style={{ textAlign: "center" }}>Mandanos un mensaje</p>
                <form action="https://formsubmit.co/munozmoraleshector@@gmail.com" method="POST" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={formik.handleSubmit}>
                    <TextField

                        id="completeName"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AssignmentIndIcon />
                                </InputAdornment>
                            ),
                        }}
                        name="completeName"
                        label="Nombre Completo"
                        onChange={formik.handleChange}
                        value={formik.values.completeName}
                        error={
                            formik.touched.completeName &&
                            Boolean(formik.errors.completeName)
                        }
                        helperText={
                            formik.touched.completeName &&
                            formik.errors.completeName
                        }
                        sx={{ width: { xs: "90%", md: "40%" }, mt: 4, ml: 2, mr: 2 }}
                    />
                    <TextField

                        id="email"
                        name="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        label="Correo Electronico"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={
                            formik.touched.email &&
                            Boolean(formik.errors.email)
                        }
                        helperText={
                            formik.touched.email &&
                            formik.errors.email
                        }
                        sx={{ width: { xs: "90%", md: "40%" }, mt: 2, ml: 2, mr: 2 }}
                    />
                    <TextField

                        id="message"
                        name="message"
                        multiline
                        rows={8}
                        label="Mensaje / Comentarios"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        error={
                            formik.touched.message &&
                            Boolean(formik.errors.message)
                        }
                        helperText={
                            formik.touched.message &&
                            formik.errors.message
                        }
                        variant="outlined"
                        sx={{ width: { xs: "90%", md: "40%" }, mt: 2, ml: 2, mr: 2 }}
                    />
                    <Button sx={{ my: 4, width: "100px" }} variant="contained" color="primary" type="submit">Enviar</Button>
                </form>
            </Box>
        </Grid>
    );
}
