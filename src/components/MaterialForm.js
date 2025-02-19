/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React from "react";
import {
    Box,
    Container,
    TextField,
    Typography,
    Button,
    Grid,
    InputAdornment,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
} from "@mui/material";
import { object, string, number } from "yup";
import { useFormik } from "formik";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { es } from "date-fns/locale";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import SpacingBox from "./SpacingBox";
import postInvoice from "../utils/data-fetching/postInvoice";
import updateInvoice from "../utils/data-fetching/updateInvoice";

// prettier-ignore
const validationSchemaForm = object({
    addressFrom: string().required("Por favor, ingrese la dirección desde donde radica la factura."),
    cityFrom: string().required("Por favor, ingrese la ciudad desde donde radica la factura."),
    zipCodeFrom: number().typeError("El código postal debe ser un número").required("Por favor, ingrese su código postal."),
    countryFrom: string().required("Por favor, ingrese el país desde donde radica la factura."),
    customerName: string().required("Por favor, ingrese el nombre de su cliente."),
    customerEmail: string().email("El correo electrónico no es válido").required("Por favor, ingrese el correo electrónico de su cliente."),
    customerAddress: string().required("Por favor, ingrese la dirección de su cliente."),
    customerCity: string().required("Por favor, ingrese la ciudad de su cliente."),
    customerZipCode: number().typeError("El código postal debe ser un número.").required("Por favor, ingrese el código postal de su cliente."),
    customerCountry: string().required("Por favor, ingrese el país de residencia de su cliente."),
    invoiceDate: string().typeError("Por favor, ingrese la fecha de la factura.").required("Por favor, ingrese la fecha de radicado de la factura."),
    invoiceStatus: string().oneOf(["Pendiente", "Pagada"]).required("Por favor, ingrese el estado de su factura"),
    amountToPay: number().typeError("El valor debe ser un número").required("Por favor, ingrese el valor a facturar."),
    description: string().min(10, "La descripción debe ser de al menos 10 caracteres.").max(250).required("Por favor, ingrese la descripción de los servicios prestados."),
});

function MaterialForm({ editInvoiceData, currentId }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    let initialValuesForm;

    if (!editInvoiceData && !currentId) {
        initialValuesForm = {
            addressFrom: "",
            cityFrom: "",
            zipCodeFrom: "",
            countryFrom: "",
            customerName: "",
            customerEmail: "",
            customerAddress: "",
            customerCity: "",
            customerZipCode: "",
            customerCountry: "",
            invoiceDate: null,
            invoiceStatus: "",
            amountToPay: "",
            description: "",
        };
    } else {
        const { id, ...data } = editInvoiceData;
        initialValuesForm = data;
    }

    const addMutation = useMutation(postInvoice, {
        onSuccess: () => {
            queryClient.invalidateQueries("getInvoices");
        },
    });

    const updateMutation = useMutation(updateInvoice, {
        onSuccess: () => {
            queryClient.invalidateQueries("getInvoices");
        },
    });

    const handleAddInvoice = (data) => {
        addMutation.mutate(data);
        navigate("/invoices");
    };

    const handleUpdateInvoice = (data, id) => {
        console.log({ ...data, id });
        updateMutation.mutate({ ...data, id });
        navigate("/invoices");
    };

    const formik = useFormik({
        initialValues: initialValuesForm,
        validationSchema: validationSchemaForm,
        onSubmit: (values) => {
            console.log("Enviando datos: ", values);
            if (!editInvoiceData && !currentId) {
                handleAddInvoice(values);
            } else {
                console.log("Actualizando");
                handleUpdateInvoice(values, currentId);
            }
        },
    });

    return (
        <Box>
            <SpacingBox isStart />
            <form onSubmit={formik.handleSubmit}>
                <Container maxWidth="sm" sx={{ px: 5 }}>
                    <Typography variant="h4" sx={{ mt: 6 }} align="center">
                        {editInvoiceData ? "Editar Factura" : "Añadir factura"}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 4 }}>
                        Facturar desde
                    </Typography>
                    <TextField
                        id="addressFrom"
                        name="addressFrom"
                        label="Dirección"
                        onChange={formik.handleChange}
                        value={formik.values.addressFrom}
                        error={
                            formik.touched.addressFrom &&
                            Boolean(formik.errors.addressFrom)
                        }
                        helperText={
                            formik.touched.addressFrom &&
                            formik.errors.addressFrom
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                    />
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                id="cityFrom"
                                name="cityFrom"
                                label="Ciudad"
                                onChange={formik.handleChange}
                                value={formik.values.cityFrom}
                                error={
                                    formik.touched.cityFrom &&
                                    Boolean(formik.errors.cityFrom)
                                }
                                helperText={
                                    formik.touched.cityFrom &&
                                    formik.errors.cityFrom
                                }
                                fullWidth
                                sx={{ mt: 4 }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="zipCodeFrom"
                                name="zipCodeFrom"
                                label="Código postal"
                                onChange={formik.handleChange}
                                value={formik.values.zipCodeFrom}
                                error={
                                    formik.touched.zipCodeFrom &&
                                    Boolean(formik.errors.zipCodeFrom)
                                }
                                helperText={
                                    formik.touched.zipCodeFrom &&
                                    formik.errors.zipCodeFrom
                                }
                                fullWidth
                                sx={{ mt: 4 }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            #
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        id="countryFrom"
                        name="countryFrom"
                        label="País"
                        onChange={formik.handleChange}
                        value={formik.values.countryFrom}
                        error={
                            formik.touched.countryFrom &&
                            Boolean(formik.errors.countryFrom)
                        }
                        helperText={
                            formik.touched.countryFrom &&
                            formik.errors.countryFrom
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                    />
                    <Typography variant="h6" sx={{ mt: 4 }}>
                        Facturar a
                    </Typography>
                    <TextField
                        id="customerName"
                        name="customerName"
                        label="Nombre del cliente"
                        onChange={formik.handleChange}
                        value={formik.values.customerName}
                        error={
                            formik.touched.customerName &&
                            Boolean(formik.errors.customerName)
                        }
                        helperText={
                            formik.touched.customerName &&
                            formik.errors.customerName
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                    />
                    <TextField
                        id="customerEmail"
                        name="customerEmail"
                        label="Correo electrónico"
                        onChange={formik.handleChange}
                        value={formik.values.customerEmail}
                        error={
                            formik.touched.customerEmail &&
                            Boolean(formik.errors.customerEmail)
                        }
                        helperText={
                            formik.touched.customerEmail &&
                            formik.errors.customerEmail
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    @
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="customerAddress"
                        name="customerAddress"
                        label="Dirección"
                        onChange={formik.handleChange}
                        value={formik.values.customerAddress}
                        error={
                            formik.touched.customerAddress &&
                            Boolean(formik.errors.customerAddress)
                        }
                        helperText={
                            formik.touched.customerAddress &&
                            formik.errors.customerAddress
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                    />
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                id="customerCity"
                                name="customerCity"
                                label="Ciudad"
                                onChange={formik.handleChange}
                                value={formik.values.customerCity}
                                error={
                                    formik.touched.customerCity &&
                                    Boolean(formik.errors.customerCity)
                                }
                                helperText={
                                    formik.touched.customerCity &&
                                    formik.errors.customerCity
                                }
                                fullWidth
                                sx={{ mt: 4 }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="customerZipCode"
                                name="customerZipCode"
                                label="Código postal"
                                onChange={formik.handleChange}
                                value={formik.values.customerZipCode}
                                error={
                                    formik.touched.customerZipCode &&
                                    Boolean(formik.errors.customerZipCode)
                                }
                                helperText={
                                    formik.touched.customerZipCode &&
                                    formik.errors.customerZipCode
                                }
                                fullWidth
                                sx={{ mt: 4 }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            #
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        id="customerCountry"
                        name="customerCountry"
                        label="País"
                        onChange={formik.handleChange}
                        value={formik.values.customerCountry}
                        error={
                            formik.touched.customerCountry &&
                            Boolean(formik.errors.customerCountry)
                        }
                        helperText={
                            formik.touched.customerCountry &&
                            formik.errors.customerCountry
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                    />
                    <Typography variant="h6" sx={{ mt: 4 }}>
                        Detalles
                    </Typography>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={es}
                    >
                        <DatePicker
                            onChange={(value) => {
                                formik.setFieldValue(
                                    "invoiceDate",
                                    Date.parse(value)
                                );
                            }}
                            value={formik.values.invoiceDate}
                            label="Fecha de la factura"
                            renderInput={(params) => (
                                <TextField
                                    id="invoiceDate"
                                    name="invoiceDate"
                                    error={
                                        formik.touched.invoiceDate &&
                                        Boolean(formik.errors.invoiceDate)
                                    }
                                    helperText={
                                        formik.touched.invoiceDate &&
                                        formik.errors.invoiceDate
                                    }
                                    fullWidth
                                    sx={{ mt: 4 }}
                                    {...params}
                                />
                            )}
                        />
                    </LocalizationProvider>
                    <FormControl fullWidth sx={{ mt: 4 }}>
                        <InputLabel>Estado</InputLabel>
                        <Select
                            name="invoiceStatus"
                            id="invoiceStatus"
                            label="Estado"
                            onChange={formik.handleChange}
                            value={formik.values.invoiceStatus}
                            error={
                                formik.touched.invoiceStatus &&
                                Boolean(formik.errors.invoiceStatus)
                            }
                        >
                            <MenuItem value="Pendiente">Pendiente</MenuItem>
                            <MenuItem value="Pagada">Pagada</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="amountToPay"
                        name="amountToPay"
                        label="Valor a pagar"
                        onChange={formik.handleChange}
                        value={formik.values.amountToPay}
                        error={
                            formik.touched.amountToPay &&
                            Boolean(formik.errors.amountToPay)
                        }
                        helperText={
                            formik.touched.amountToPay &&
                            formik.errors.amountToPay
                        }
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            ),
                        }}
                        sx={{ mt: 4 }}
                    />
                    <TextField
                        id="description"
                        name="description"
                        label="Descripción breve"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                        }
                        helperText={
                            formik.touched.description &&
                            formik.errors.description
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                        multiline
                        rows={7}
                    />
                    <Button
                        id="description"
                        name="description"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 5 }}
                        type="submit"
                    >
                        Guardar cambios
                    </Button>
                </Container>
            </form>
            <SpacingBox isStart={false} />
        </Box>
    );
}

MaterialForm.propTypes = {
    editInvoiceData: PropTypes.shape({
        addressFrom: PropTypes.string,
        cityFrom: PropTypes.string,
        zipCodeFrom: PropTypes.number,
        countryFrom: PropTypes.string,
        customerName: PropTypes.string,
        customerEmail: PropTypes.string,
        customerAddress: PropTypes.string,
        customerCity: PropTypes.string,
        customerZipCode: PropTypes.number,
        customerCountry: PropTypes.string,
        invoiceDate: PropTypes.string,
        invoiceStatus: PropTypes.string,
        amountToPay: PropTypes.number,
        description: PropTypes.string,
        id: PropTypes.string,
    }),
    currentId: PropTypes.string,
};

MaterialForm.defaultProps = {
    editInvoiceData: null,
    currentId: null,
};

export default MaterialForm;
