import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Topbar } from "../../components/Topbar";

import { Container } from './styles';

const LandingPage: React.FC = () => {

    const history = useHistory();

    function navigateToChat() {
        history.push('/chat');
    }

    return (
        <>
            <Topbar />
            <Container>
                <h1>Bem-vindo!</h1>
                <span>Conecte-se com pessoas em qualquer lugar. Aproveite nosso app!</span>
                <button onClick={navigateToChat}>Continuar para o app <FaArrowRight /></button>
            </Container>
        </>
    );
}

export default LandingPage;