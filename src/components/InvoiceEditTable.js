import React from "react";
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

export default function InvoiceEditTable() {
    return (
        <Container maxWidth="sm" sx={{ mb: 10, px: 5 }}>
            <TableContainer component={Paper} variant="outlined">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Banner</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>$20.000</TableCell>
                            <TableCell>$20.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>$17.000</TableCell>
                            <TableCell>$17.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>SEO</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>$15.000</TableCell>
                            <TableCell>$30.000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
