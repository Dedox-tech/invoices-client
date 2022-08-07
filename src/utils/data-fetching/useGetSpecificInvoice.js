import { useQuery } from "react-query";

export default function useGetSpecificInvoice(id) {
    return useQuery("getSpecificInvoice", async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_DOMAIN}/invoices/${id}`,
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
                "Esta factura no fue encontrada en nuestros registros"
            );
        }

        if (response.status === 500) {
            throw new Error(
                "No pudimos obtener la información de su factura, hubo un error con nuestro sistema"
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
