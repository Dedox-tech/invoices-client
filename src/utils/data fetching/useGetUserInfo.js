import { useQuery } from "react-query";

export default function useGetUserInfo() {
    return useQuery("get-user-info", async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_DOMAIN}/users/current`
        );
        if (!response.ok) {
            throw new Error("Oops, an error ocurred fetching the data");
        }
        return response.json();
    });
}
