import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users/api/loginStatus", {
                    withCredentials: true,
                });
                setIsLoggedIn(response.data === true);
            } catch (error) {
                console.error("Login status check failed:", error);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    return isLoggedIn;
};

export default useAuth;
