import { useQuery } from "react-query";

export default function useGetUserInfo() {
    return useQuery("getUserInfo", async () => {
        const response = await fetch(
            `${process.env.NODE_ENV.REACT_APP_API_DOMAIN}/users/current`
        );
        if (!response.ok) {
            throw new Error(
                "Oops, lo sentimos, no pudimos obtener la info del usuario"
            );
        }
        return response.json();
    });
}
