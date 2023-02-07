import { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [userDetails, setUserDetails] = useState(null);

    const value = { userDetails, setUserDetails };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserDetails() {
    return useContext(UserContext);
} 