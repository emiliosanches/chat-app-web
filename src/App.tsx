import React, { useEffect, useState } from 'react';
import { Router } from './routes';

import { LoggedUserContext, IContextValue } from './components/LoggedUserContext'
import {Loading} from "./pages/Loading";
import { api } from './services/api';

import './global.css';

function App() {

    const [login, setLogin] = useState<Omit<IContextValue, 'changeValue'>>();

    useEffect(() => {
        try {
            (async () => {
                const response = await api.get('/logged');
                setLogin(response.data);
            })();
        } catch {

        }
    }, []);

    const loginContextVal: IContextValue | undefined = login? {
        changeValue: (newVal: {logged: boolean, user?: string}) => {
            setLogin(newVal);
        },
        ...login
    } : undefined;

    return (
        loginContextVal ?
            <LoggedUserContext.Provider value={loginContextVal}>
                <Router />
            </LoggedUserContext.Provider>
        : <Loading />
    );
}

export default App;
