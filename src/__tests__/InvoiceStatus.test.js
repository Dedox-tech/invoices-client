import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import InvoiceStatus from "../components/InvoiceStatus";

describe("InvoiceStatus component check", () => {
    it("Render the paid status", () => {
        const component = render(
            <BrowserRouter>
                <InvoiceStatus paidStatus="Pagada" />
            </BrowserRouter>
        );
        expect(component.queryByText("Pagada")).toBeInTheDocument();
    });
    it("Render the not paid status", () => {
        const component = render(
            <BrowserRouter>
                <InvoiceStatus paidStatus="Pendiente" />
            </BrowserRouter>
        );
        expect(component.queryByText("Pendiente")).toBeInTheDocument();
    });
});
