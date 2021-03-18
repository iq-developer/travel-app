import React, {useState, useEffect} from 'react';
import * as axios from 'axios';

import 'antd/dist/antd.css';

import { Form, Input, Button, Upload } from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import s from "../LoginPage/LoginPage.module.css";
import {NavLink} from "react-router-dom";
import {apiLogin} from "../../API/apiCountry";
import {IsFetching} from "../../redux/reducers/AuthReducer";
import {languageFunc} from "../../common/functions/functions";

const RegisterPage = ({LoginAuthThunk, lang, isSuccess, login, isAuthenticated, history, isFetching}) => {

    useEffect(() => {
        if (!!isSuccess && isSuccess.status === 200) {
            login(isSuccess.data.token, isSuccess.data.userId, isSuccess.data.avatar, isSuccess.data.name)
        }
    }, [isSuccess])
    useEffect(() => {
        if (!!isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated, history])

    const [error, setError] = useState(false)

    const onFinish = (values) => {
        if (!!file) {
            setError(false)
            IsFetching(true)
            apiLogin.register({email:values.email,name:values.name, password:values.password}).then(reg => {
                if (reg.status === 201) {
                    apiLogin.login({email:values.email, password:values.password}).then(resToken => {
                        axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/uploads/avatar", file, {
                            headers: {'Authorization': `Bearer ${resToken.data.token}`}
                        }).then(() =>{
                            LoginAuthThunk({email:values.email, password:values.password})
                            IsFetching(false)
                        })
                    })
                }
            }).catch(() => alert('aaa'))


        } else {
            delete values.upload;
            setError(false)
            IsFetching(true)
            apiLogin.register(values).then(res => {
                if (res.status === 201) {
                    LoginAuthThunk(values)
                }
            }).then(r => {
                IsFetching(false)
            }).catch(e => setError(true))
/*            axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/auth/register", values).then(res => {
                if (res.status === 201) {
                    LoginAuthThunk(values)
                }
            })*/

        }
    };

    const [file, setFile] = useState(null)
    async function prepareFileToUpload(event) {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        setFile(data)
    }


    return (
        <div className={s.login}>
            <div className={s.modal}>
                <div className={s.wrapp}>
                    <h1>{languageFunc(lang,
                        'Регистрация',
                        'Sign up',
                        'Anmelden')}</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: languageFunc(lang,
                                    'Пожалуйста, введите свой адрес электронной почты!',
                                    'Please input your email!',
                                    'Bitte geben Sie Ihre E-Mail ein!')}]}>

                            <Input type={'email'}
                                   prefix={<MailOutlined className="site-form-item-icon" />}
                                   placeholder={languageFunc(lang,
                                       'Почта',
                                       'Email!',
                                       'Email')} />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: languageFunc(lang,
                                    'Пожалуйста, введите ваше имя!',
                                    'Please input your name!',
                                    'Bitte geben Sie Ihren Namen ein!')},
                                {min:3, message:languageFunc(lang,
                                        'Имя должен состоять минимум из 3 символов!',
                                        'Name must be minimum 3 characters!',
                                        'Das Passwort muss aus mindestens 6 Zeichen bestehen!')}]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                type="name"
                                placeholder={languageFunc(lang,
                                    'Ваше имя',
                                    'Your name',
                                    'Dein Name')}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: languageFunc(lang,
                                        'Пожалуйста, введите свой пароль!',
                                        'Please input your Password!',
                                        'Bitte geben Sie Ihr Passwort ein!')},
                                { min: 6, message:languageFunc(lang,
                                        'Пароль должен состоять минимум из 6 символов!',
                                        'Password must be minimum 6 characters!',
                                        'Das Passwort muss aus mindestens 6 Zeichen bestehen!')}
                                ]}
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


                        <Form.Item
                            name="upload"
                            label={languageFunc(lang,
                                'Фотография',
                                'The photo',
                                'Das Foto')}
                            //valuePropName="fileList"
                            //valuePropName={file}
                            //getValueFromEvent={'normFile'}
                            onChange={prepareFileToUpload}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>{languageFunc(lang,
                                    'Нажмите, чтобы загрузить',
                                    'Click to upload',
                                    'Klicken Sie zum Hochladen')}
                                    </Button>
                            </Upload>
                        </Form.Item>

                        {/*<input type="file" onChange={prepareFileToUpload}/>*/}
                        <Form.Item>

                            {!!error && <div className={s.red}>Почта занаята</div>}
                            {!!isFetching && <Button type="primary" loading className="login-form-button">
                                {languageFunc(lang,
                                    'Зарегистрироваться',
                                    'Sign Up',
                                    'Anmeldung')}
                            </Button>}
                            {!isFetching && <Button type="primary" htmlType="submit" className="login-form-button">
                                {languageFunc(lang,
                                    'Зарегистрироваться',
                                    'Sign Up',
                                    'Anmeldung')}
                            </Button>}
                             <NavLink to={'/login'}>{languageFunc(lang,
                                 'Уже есть аккаунт?',
                                 'Already have an account?',
                                 'Sie haben bereits ein Konto?')}</NavLink>
                        </Form.Item>
                    </Form>
                </div>


            </div>

        </div>

    );
};

export default RegisterPage;
