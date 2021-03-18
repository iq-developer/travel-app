import React, { useEffect} from 'react';
import s from './LoginPage.module.css';





import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, CloseOutlined } from '@ant-design/icons';

import {NavLink} from "react-router-dom";
import {languageFunc} from "../../common/functions/functions";

const LoginPage = ({isFetching, LoginAuthThunk, isError,
                       history,
                       isSuccess, IsSuccess, isAuthenticated,
                       lang,
                       ava, logout, userId,
                       login}) => {

    useEffect(() => {
        if (!!isSuccess && isSuccess.status === 200) {
            login(isSuccess.data.token, isSuccess.data.userId, isSuccess.data.avatar, isSuccess.data.name)
        }
    }, [isSuccess])

    useEffect(() => {
        if (!!isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated])
    


    const onFinish = (values) => {
        IsSuccess(null)
        LoginAuthThunk(values)

    };

    return (
        <div className={s.login}>
            <div className={s.modal}>
                <NavLink className={s.kr} to={'/'}><CloseOutlined /> </NavLink>
                <div className={s.wrapp}>
                <h1>{languageFunc(lang,
                    'Вход',
                    'Sign in',
                    'Einloggen')}</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message:languageFunc(lang,
                                'Пожалуйста, введите свой адрес электронной почты! ',
                                'Please input your email!',
                                'Bitte geben Sie Ihre E-Mail ein!') }]}
                    >
                        <Input type={'email'} prefix={<UserOutlined className="site-form-item-icon" />}
                               placeholder={languageFunc(lang,
                        'Почта',
                        'Email',
                        'Email')} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message:  languageFunc(lang,
                                'Пожалуйста введите ваш пароль!',
                                'Please input your Password!',
                                'Bitte geben Sie Ihr Passwort ein!') },
                            { min: 6, message: languageFunc(lang,
                                    'Пароль должен состоять минимум из 6 символов! ',
                                    'Password must be minimum 6 characters!',
                                    'Das Passwort muss aus mindestens 6 Zeichen bestehen!')}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder={languageFunc(lang,
                                'Пароль',
                                'Password',
                                'Passwort')}
                        />
                    </Form.Item>
                    {!!isError && <div className={s.red}> {languageFunc(lang,
                        'Логин или пароль не верный',
                        'Login or password is not correct',
                        'Login oder Passwort ist nicht korrekt ')}</div>}

                    <Form.Item>
                        {!isFetching && <Button type="primary" htmlType="submit" className="login-form-button">
                            {languageFunc(lang,
                            'Войти',
                            'Sign in',
                            'Anmelden')}
                        </Button>}
                        {!!isFetching && <Button type="primary" loading className="login-form-button">
                            {languageFunc(lang,
                                'Войти',
                                'Sign in',
                                'Einloggen')}
                        </Button>}
                        {languageFunc(lang,
                            'Или',
                            'Or',
                            'Oder')} <NavLink to={'/register'}>{languageFunc(lang,
                        'зарегистрироваться сейчас',
                        'register now!',
                        'jetzt registrieren! ')}</NavLink>
                    </Form.Item>
                </Form>
                </div>


            </div>

        </div>
    );
};

export default LoginPage;