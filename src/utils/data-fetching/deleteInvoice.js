export default async function deleteInvoice(invoiceId) {
    const response = await fetch(
        `${process.env.REACT_APP_API_DOMAIN}/invoices/${invoiceId.id}`,
        {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    if (response.status === 400) {
        throw new Error("La factura no pudo ser eliminada. Intenta nuevamente");
    }

    if (response.status === 500) {
        throw new Error(
            "La factura no pudo ser eliminada, hubo un error con nuestro sistema. Intentalo más tarde"
        );
    }
    if (!response.ok) {
        throw new Error("Oops, lo sentimos, ha ocurrido un error inesperado");
    }
    return response.json();
}
