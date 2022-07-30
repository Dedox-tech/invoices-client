/* eslint-disable no-console */
import React from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { object, string, number, date } from "yup";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import SpacingBox from "./SpacingBox";

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
    invoiceDate: date().typeError("El formato de la fecha no es correcto").required("Por favor, ingrese la fecha de radicado de la factura."),
    amountToPay: number().typeError("El valor debe ser un número").required("Por favor, ingrese el valor a facturar."),
    description: string().min(10, "La descripción debe ser de al menos 10 caracteres.").max(250).required("Por favor, ingrese la descripción de los servicios prestados."),
});

function MaterialForm({ isAddInvoiceForm }) {
    if (!isAddInvoiceForm) {
        // eslint-disable-next-line no-unused-vars
        const initialValuesForm = {
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
            invoiceDate: "",
            amountToPay: "",
            description: "",
        };
    }

    const initialValuesForm = {
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
        invoiceDate: "",
        amountToPay: "",
        description: "",
    };

    const formik = useFormik({
        initialValues: initialValuesForm,
        validationSchema: validationSchemaForm,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box>
            <SpacingBox isStart />
            <form onSubmit={formik.handleSubmit}>
                <Container maxWidth="sm" sx={{ px: 5 }}>
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
                            formik.touched.cityFrom && formik.errors.cityFrom
                        }
                        fullWidth
                        sx={{ mt: 4 }}
                    />
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
                    />
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
                    />
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
                    <TextField
                        id="invoiceDate"
                        name="invoiceDate"
                        label="Fecha de la factura"
                        onChange={formik.handleChange}
                        value={formik.values.invoiceDate}
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
                    />
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
                        sx={{ mt: 4 }}
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
    isAddInvoiceForm: PropTypes.bool.isRequired,
};

export default MaterialForm;
