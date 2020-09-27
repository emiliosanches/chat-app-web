import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup';
import VerifyLogged from './pages/VerifyLogged';

import GlobalChat from './pages/GlobalChat';

export const Router: React.FC = () => (
    <BrowserRouter>
        <Route component={VerifyLogged} />
        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path={["/chat", "/chat/global"]} component={GlobalChat} />
            {/* <Route path="/chat/:id" component={PrivateChat} /> */}
        </Switch>
    </BrowserRouter>
)