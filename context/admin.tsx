import React, { useContext, createContext, useState } from 'react';

type adminType = {
    isAdmin: boolean,
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>
}

const adminContext = createContext<adminType | null>(null);

interface AdminContextProviderInterface {
    children: React.ReactNode,
}

const AdminContextProvider = ({ children }: AdminContextProviderInterface): JSX.Element => {

    // check if the user is admin and give it the access to admin panel
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    return (
        <adminContext.Provider
            value={{
                isAdmin, setIsAdmin,
            }}
        >
            {children}
        </adminContext.Provider>
    );
}

export const useAdminContext = () => useContext(adminContext);

export default AdminContextProvider;