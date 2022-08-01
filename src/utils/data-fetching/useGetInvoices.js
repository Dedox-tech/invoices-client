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
        if (!response.ok) {
            throw new Error(
                "Oops, lo sentimos, no pudimos obtener la lista de facturas"
            );
        }
        return response.json();
    });
}
