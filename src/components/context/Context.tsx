import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import auth from "../../../firebase.config";

interface ContextType {
    loading: boolean;
    user: User | null;
}

export const ContextProvider = createContext<ContextType | null>(null);

interface ContextProps {
    children: ReactNode;
}

const Context = ({ children }: ContextProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                setUser(user);
            }
        });
    }, [user, loading])

    const val: ContextType = {
        loading,
        user
    };

    return (
        <div>
            <ContextProvider.Provider value={val}>
                {children}
            </ContextProvider.Provider>
        </div>
    );
};

export default Context;
