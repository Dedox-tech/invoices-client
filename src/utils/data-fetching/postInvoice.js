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
    if (!response.ok) {
        throw new Error(
            "Oops, ha ocurrido un error mientras obteníamos los datos"
        );
    }
    return response.json();
}
