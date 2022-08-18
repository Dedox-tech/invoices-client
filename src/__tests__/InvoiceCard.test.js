import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import InvoiceCard from "../components/InvoiceCard";

describe("Card components check", () => {
    const queryClient = new QueryClient();

    it("Render the component", () => {
        const component = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <InvoiceCard />
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(component.queryByText("Vence")).toBeInTheDocument();
    });

    it("Render the buttons", () => {
        const component = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <InvoiceCard />
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(component.queryByText("Ver detalles")).toBeInTheDocument();
        expect(component.queryByText("Eliminar")).toBeInTheDocument();
    });

    it("Shows the loading skeletons when the data is loading", () => {
        const component = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <InvoiceCard isLoading />
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(component.queryByText("Vence")).not.toBeInTheDocument();
        expect(component.queryByText("Ver detalles")).toBeInTheDocument();
        expect(component.queryByText("Eliminar")).toBeInTheDocument();
    });

    it("Shows the loading skeletons when the data is fetching", () => {
        const component = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <InvoiceCard isFetching />
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(component.queryByText("Vence")).not.toBeInTheDocument();
        expect(component.queryByText("Ver detalles")).toBeInTheDocument();
        expect(component.queryByText("Eliminar")).toBeInTheDocument();
    });

    it("Shows the data when passing it as props", () => {
        const component = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <InvoiceCard
                        name="Pedro Rodriguez"
                        date="31556926"
                        status="Pendiente"
                        amount={40000}
                    />
                </QueryClientProvider>
            </BrowserRouter>
        );
        expect(component.queryByText("Pedro Rodriguez")).toBeInTheDocument();
        expect(component.queryByText("01/01/1970")).toBeInTheDocument();
        expect(component.queryByText("Pendiente")).toBeInTheDocument();
        expect(component.queryByText("$ 40000")).toBeInTheDocument();
    });
});
