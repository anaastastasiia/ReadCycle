import { createContext, useContext } from "react";
import { UserData } from "../store/authStore";

interface UserContextType {
    user: UserData | null;
    token: string | null;
    login: () => void;
    register: () => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUserContext must be used within a UserProvider");
    return context;
};
