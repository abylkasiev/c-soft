import React from 'react';
import './Login.css'

const Login = (props) => {
    

    const {
        email, 
        setEmail,
        password, 
        setPassword,
        handleLogin,
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError,
        passwordError,
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <h2 className="auth-title"></h2>
                <label className="label-form">Почта</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email}
                    autoComplete="email" 
                    placeholder="Электронный адрес"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label className="label-form">Пароль</label>
                <input 
                    type="password" 
                    autoFocus 
                    required 
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Войти</button>
                            <p>
                                У вас ещё нет аккаунта ? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Зарегистрируйтесь</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Зарегистрироваться</button>
                            <p>
                                Уже есть аккаунт? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Войдите</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;