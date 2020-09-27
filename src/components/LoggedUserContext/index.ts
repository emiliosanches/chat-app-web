import React, { createContext } from 'react';

export interface IContextValue {
    changeValue: (newVal: Omit<IContextValue, 'changeValue'>) => any,
    logged: boolean,
    user?: string
}

const defaultValue: IContextValue = {
    changeValue: () => { },
    logged: false
}

export const LoggedUserContext = createContext<IContextValue | undefined>(defaultValue);