import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { LoggedUserContext } from '../LoggedUserContext';
import { api } from "../../services/api";

import { TopbarStyle } from './styles';

interface TopbarProps {
    justifyContent?: string;
}

export const Topbar: React.FC<TopbarProps> = ({ children, justifyContent }) => {
    const history = useHistory();
    const loggedUserContext = useContext(LoggedUserContext);

    function handleLogout() {
        api.delete('/logout').then(() => {
            loggedUserContext!.changeValue({logged: false, user: undefined})
            history.push('/login');
        }).catch(() => {
            alert("Ocorreu um erro inesperado, tente novamente.")
        });
    }

    return (
        <TopbarStyle justifyContent={justifyContent}>
            <button onClick={handleLogout}><FaSignOutAlt />Logout</button>
            <section id="children">{children}</section>
        </TopbarStyle>
    )
}