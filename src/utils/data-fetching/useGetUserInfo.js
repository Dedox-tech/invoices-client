import { useQuery } from "react-query";

export default function useGetUserInfo() {
    return useQuery("getUserInfo", async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_DOMAIN}/users/current`
        );

        if (response.status === 404) {
            throw new Error(
                "El usuario no se encuentra registrado correctamente en el sistema"
            );
        }

        if (response.status === 500) {
            throw new Error(
                "No se pudo obtener la información de su usuario, hubo un error con nuestro sistema"
            );
        }

        if (!response.ok) {
            throw new Error(
                "Oops, lo sentimos, ha ocurrido un error inesperado"
            );
        }
        return response.json();
    });
}
