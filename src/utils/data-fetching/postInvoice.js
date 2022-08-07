export default async function postInvoice(data) {
    const response = await fetch(
        `${process.env.REACT_APP_API_DOMAIN}/invoices`,
        {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (response.status === 400) {
        throw new Error("La factura no pudo ser añadida. Intente nuevamente");
    }

    if (response.status === 500) {
        throw new Error(
            "La factura no pudo ser añadida, hubo un error con nuestro sistema"
        );
    }

    if (!response.ok) {
        throw new Error("Oops! Lo sentimos, ha ocurrido un error inesperado");
    }
    return response.json();
}
