export default async function updateInvoice(data) {
    const response = await fetch(
        `${process.env.REACT_APP_API_DOMAIN}/invoices/${data.id}`,
        {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (response.status === 400) {
        throw new Error("La factura no pudo ser editada. Intente nuevamente");
    }

    if (response.status === 500) {
        throw new Error(
            "La factura no pudo ser editada, hubo un error con nuestro sistema"
        );
    }

    if (!response.ok) {
        throw new Error("Oops! Lo sentimos, ha ocurrido un error inesperado");
    }
    return response.json();
}
