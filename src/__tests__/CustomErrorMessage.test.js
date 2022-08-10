import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CustomErrorMessage from "../components/CustomErrorMessage";

describe("CustomErrorMessage component check", () => {
    it("Render correctly a 404 error message", () => {
        const component = render(
            <BrowserRouter>
                <CustomErrorMessage message="Esta factura no fue encontrada en nuestros registros" />
            </BrowserRouter>
        );
        expect(
            component.queryByText(
                "Esta factura no fue encontrada en nuestros registros"
            )
        ).toBeInTheDocument();
    });
    it("Render correctly a 500 error message", () => {
        const component = render(
            <BrowserRouter>
                <CustomErrorMessage message="No pudimos obtener la información de su factura, hubo un error con nuestro sistema" />
            </BrowserRouter>
        );
        expect(
            component.queryByText(
                "No pudimos obtener la información de su factura, hubo un error con nuestro sistema"
            )
        ).toBeInTheDocument();
    });
});
