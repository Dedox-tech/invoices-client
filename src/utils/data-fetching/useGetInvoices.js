/* eslint-disable no-console */
import { useQuery } from "react-query";

export default function useGetInvoices() {
    return useQuery("getInvoices", async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_DOMAIN}/invoices`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 404) {
            throw new Error(
                "Parece que aún no has registrado facturas en nuestra app..."
            );
        }

        if (response.status === 500) {
            throw new Error(
                "No pudimos obtener su lista de facturas, hubo un error con nuestro sistema. Inténtelo más tarde"
            );
        }

        if (!response.ok) {
            throw new Error(
                "Oops! Lo sentimos, ha ocurrido un error inesperado"
            );
        }
        return response.json();
    });
}
