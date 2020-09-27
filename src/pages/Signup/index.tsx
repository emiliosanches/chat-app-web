import React, { useState } from 'react';
import {FaUser, FaAsterisk } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api'

import { Header, Main, SignupForm } from './styles';

const SignupPage: React.FC = () => {

    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [usernameError, setUsernameError] = useState(false)
    const [passError, setPassError] = useState(false);
    const [passConfirmError, setPassConfirmError] = useState(false);

    const errorInputStyle = {
        border: '1px solid red'
    }

    function handleChangeUsername(evt: React.ChangeEvent<HTMLInputElement>) {
        setUsername(evt.target.value);
    }

    function handleChangePassword(evt: React.ChangeEvent<HTMLInputElement>) {
        setPassword(evt.target.value);
    }
    function handleChangePasswordConfirmation(evt: React.ChangeEvent<HTMLInputElement>) {
        setPasswordConfirmation(evt.target.value);
    }

    function handleSubmit(evt: React.FormEvent) {
        evt.preventDefault();

        if (!username) {
            setUsernameError(true);
            return alert("O nome de usuário é obrigatório!");
        }

        setUsernameError(false)

        if (!password) {
            setPassError(true);
            return alert("A senha é obrigatória!");
        }

        if (password !== passwordConfirmation) {
            setPassError(true);
            setPassConfirmError(true);
            return alert("As senhas precisam ser iguais!");
        }

        setPassError(false)
        setPassConfirmError(false)

        api.post('/signup', {
            username,
            password
        }).then(() => {
            alert("Cadastrado com sucesso!");
            history.push('/login');
        }).catch(err => {
            if (err.response.status === 400) {
                alert(`Os campos abaixo são inválidos:\n${JSON.stringify(err.response.data)}`);
                
            }
        })
    }

    return (
        <>
            <Header>
                <h1>Registre-se no nosso chat online!</h1>
            </Header>

            <Main>
                <SignupForm onSubmit={handleSubmit}>
                    <div className="input-block">
                        <FaUser size={25}/>
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            value={username}
                            onChange={handleChangeUsername}
                            style={usernameError ? errorInputStyle : {}}
                        />
                    </div>

                    <div className="input-block">
                        <FaAsterisk size={25} />
                        <input
                            type="password"
                            placeholder="Digite uma senha"
                            value={password}
                            onChange={handleChangePassword}
                            style={passError ? errorInputStyle : {}}
                        />

                        <FaAsterisk size={25} />
                        <input
                            type="password"
                            placeholder="Confirme a senha"
                            value={passwordConfirmation}
                            onChange={handleChangePasswordConfirmation}
                            style={passConfirmError ? errorInputStyle : {}}
                        />
                    </div>

                    <button type="submit">Cadastrar</button>
                </SignupForm>
            </Main>
        </>
    );
}

export default SignupPage;