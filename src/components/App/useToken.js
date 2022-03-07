import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        // console.log(userToken?.key);
        return userToken?.key;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userTaken => {
        localStorage.setItem("token", JSON.stringify(userTaken));
        setToken(userTaken.key);
    };

    return {
        setToken: saveToken,
        token
    }
}