import { useQuery } from "react-query";

export default function useGetUserInfo() {
    return useQuery("getUserInfo", async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_DOMAIN}/users/current`
        );
        if (!response.ok) {
            throw new Error(
                "Oops, ha ocurrido un error mientras obteníamos los datos"
            );
        }
        return response.json();
    });
}
