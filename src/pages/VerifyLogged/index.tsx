import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {LoggedUserContext} from "../../components/LoggedUserContext";

const VerifyLogged: React.FC = () => {

    const loggedUserContext = useContext(LoggedUserContext);
    const history = useHistory();

    const IGNORED_PATHS = [
        {
            name: '/login',
            exact: false
        }, 
        {
            name: '/signup',
            exact: false
        }, 
        {
            name: '/',
            exact: true
        }
    ];

    const isIgnored = (path: string) => IGNORED_PATHS.some(
        p => (p.exact && path === p.name) || (!p.exact && path.startsWith(p.name))
    )

    useEffect(() => {
        if (!loggedUserContext?.logged &&
            !isIgnored(history.location.pathname)
        )
            history.replace('/login');
        
    });

    return <></>;
}

export default VerifyLogged; 