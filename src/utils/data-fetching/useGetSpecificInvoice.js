import { useQuery } from "react-query";

export default function useGetSpecificInvoice(id) {
    return useQuery("getSpecificInvoice", async () => {
        const response = await fetch(
            `${process.env.NODE_ENV.REACT_APP_API_DOMAIN}/invoices/${id}`,
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
                "Oops! Lo sentimos, ha surgido un problema con nuestro servidor..."
            );
        }
        return response.json();
    });
}
