import { useContext } from 'react';
import { createContext, useState } from 'react';

export const UnitsContext = createContext("F");

export function UnitsProvider({ children }) {
    const [units, setUnits] = useState("F");

    return (
        <UnitsContext value={{ units, setUnits }}>
            {children}
        </UnitsContext>
    )
}

export function useUnits() {
    const value = useContext(UnitsContext);

    if (value === null) {
        throw new Error("useUnits must be used inside a UnitsProvider");
    }

    return value;
}