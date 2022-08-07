export default async function updateInvoice(data) {
    const response = await fetch(
        `${process.env.NODE_ENV.REACT_APP_API_DOMAIN}/invoices/${data.id}`,
        {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );
    if (!response.ok) {
        throw new Error("Oops, lo sentimos, no pudimos añadir su factura");
    }
    return response.json();
}
