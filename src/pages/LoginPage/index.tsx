import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa'
import { api } from '../../services/api';

import { Header, Main, LoginForm, SignupSection, Container } from './styles';
import { LoggedUserContext } from '../../components/LoggedUserContext';

const LoginPage: React.FC = () => {

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const userContext = useContext(LoggedUserContext);

    const history = useHistory();

    function handleChangeLoginUsername(evt: React.ChangeEvent<HTMLInputElement>) {
        setLoginUsername(evt.target.value);
    }

    function handleChangeLoginPassword(evt: React.ChangeEvent<HTMLInputElement>) {
        setLoginPassword(evt.target.value);
    }

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();

        api.post('/auth', {
            username: loginUsername,
            password: loginPassword
        }).then(() => {
            userContext?.changeValue({
                logged: true,
                user: loginUsername
            });
            history.push('/chat');
        }).catch(err => {
            if (err.response.status === 401) {
                alert("Nome de usuário não encontrado!");
            } else if (err.response.status === 403) {
                alert("Senha incorreta!");
            } else {
                alert("Ocorreu um erro inesperado. Tente novamente mais tarde!")
            }
        });

    }

    function handleClickRegister() {
        history.push('/signup');
    }

    return (
        <Container>
            <Header>
                <h1>Faça seu login!</h1>
                <span>Ou junte-se a nós registrando-se!</span>
            </Header>

            <Main>
                <LoginForm onSubmit={handleSubmit}>
                    <h1>Entre</h1>

                    <div className="input-block">
                        <FaUser size={25} />
                        <input
                            type="text"
                            value={loginUsername}
                            onChange={handleChangeLoginUsername}
                        />
                    </div>

                    <div className="input-block">
                        <FaLock size={25} />
                        <input
                            type="password"
                            value={loginPassword}
                            onChange={handleChangeLoginPassword}
                        />
                    </div>

                    <button type="submit">Login</button>
                </LoginForm>

                <SignupSection>
                    <h1>Ainda não está registrado?</h1>
                    <span>Faça seu cadastro agora mesmo e comece a usar nosso app!</span>
                    <button
                        type="button"
                        onClick={handleClickRegister}
                    >
                        Registre-se
                    </button>
                </SignupSection>
            </Main>
        </Container>
    );
}

export default LoginPage;