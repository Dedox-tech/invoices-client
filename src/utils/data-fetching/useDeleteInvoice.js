
export default function useDeleteInvoice() {
    const deleteInvoice = async (invoiceId) => {
        const response = await fetch(
            `${process.env.REACT_APP_API_DOMAIN}/invoices/${invoiceId}`,
            {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
        if (response.status === 400) {
            throw new Error(
                "La factura no pudo ser eliminada. Intenta nuevamente"
            );
        }

        if (response.status === 500) {
            throw new Error(
                "La factura no pudo ser eliminada, hubo un error con nuestro sistema. Intentalo más tarde."
            );
        }
    }

    return { deleteInvoice }
}