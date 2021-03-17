import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'

import {useAuth} from "./hooks/auth.hook";

import HeaderContainer from "./Containers/HeaderContainer";

import { useTranslation } from "react-i18next";
import OwnPageContainer from "./Containers/OwnPageContainer";
import CountryPageContainer from "./Containers/CountryPageContainer";
import LoginPageContainer from "./Containers/LoginPageContainer";
import RegisterPageContainer from "./Containers/RegisterPageContainer";
import Footer from './Components/Footer/Footer'
import s from './App.module.css'



function App({lang}) {

    const { t, i18n } = useTranslation();

    const {token, login, logout, userId, ava, name} = useAuth()
    const isAuthenticated = !!token







    return (
        <div className={s.app}  >
            <HeaderContainer t={t}
                             i18n={i18n}
                             lang={lang}
                             name={name}
                             logout={logout}
                             isAuthenticated={isAuthenticated} />
            <Route path={'/'} exact render={() => <OwnPageContainer ava={ava} lang={lang} t={t} />} />
            <Route path={'/country/:id'}  render={() => <CountryPageContainer isAuthenticated={isAuthenticated}
                                                                              token={token} />} />
            <Route path={'/register'} render={() => <RegisterPageContainer isAuthenticated={isAuthenticated}
                                                                           login={login}/>}/>
            <Route path={'/login'} render={() => <LoginPageContainer isAuthenticated={isAuthenticated}
                                                                     logout={logout}
                                                                     ava={ava}
                                                                     userId={userId}
                                                                     login={login}/>}/>
            <Footer />
        </div>
    );
}

export default App;
