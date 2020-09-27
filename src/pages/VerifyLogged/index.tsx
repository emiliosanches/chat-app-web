import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {LoggedUserContext} from "../../components/LoggedUserContext";

const VerifyLogged: React.FC = () => {

    const loggedUserContext = useContext(LoggedUserContext);
    const history = useHistory();

    useEffect(() => {
        if (loggedUserContext &&
            !loggedUserContext.logged &&
            !history.location.pathname.startsWith('/login') &&
            !history.location.pathname.startsWith('/signup')
        )
            history.replace('/login');
        
    });

    return <></>;
}

export default VerifyLogged; 