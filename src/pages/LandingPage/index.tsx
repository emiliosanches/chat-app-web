import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import { PageContainer, MainContainer, Grid, ButtonsContainer } from './styles';

import groupImg from '../../assets/img/group.svg';
import chatImg from '../../assets/img/chat.svg';

const LandingPage: React.FC = () => {

    const history = useHistory();

    function navigateToChat() {
        history.push('/chat');
    }

    return (
        <PageContainer>
            <MainContainer>
                <h1>ChatName</h1>
                <Grid>
                    <div id="first-image">
                        <img src={groupImg} />
                    </div>
                    <div id="first-text">
                        <h2>Converse com o mundo...</h2>
                        <span>Com nosso chat global, você pode conversar com pessoas de todo o mundo que estão utilizando nosso app.</span>
                    </div>
                    <div id="second-text">
                        <h2>...ou com quem você quiser!</h2>
                        <span>Você também pode encontrar seus amigos e se conectar com eles usando nosso sistema de amizades.</span>
                    </div>
                    <div id="second-image">
                        <img src={chatImg} />
                    </div>
                </Grid>
                <ButtonsContainer>
                    <Link id="register-button" to="/signup">Registrar</Link>
                    <Link id="open-app-button" to="/chat">Abrir app</Link>
                </ButtonsContainer>
            </MainContainer>
            {/* Page content (about the app), out of the dark background */}
        </PageContainer>
    );
}

export default LandingPage;