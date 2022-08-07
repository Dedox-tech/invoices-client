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
        console.log(response);
        if (!response.ok) {
            throw new Error(
                "Oops! Lo sentimos, ha surgido un problema con nuestro servidor..."
            );
        }
        return response.json();
    });
}
