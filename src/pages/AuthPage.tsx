import React, { useState } from 'react';
import classes from '../styles/AuthPageStyles.module.scss';

interface Props{
    handleAuth: any,
    handleIsAdmin: any,
}

const AuthPage = ({handleAuth, handleIsAdmin}: Props) => {

    const [admin, setAdmin] = useState(false);
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const admin1 = {
        name: 'bogdan',
        pass: 'dsaqwe'
    }

    const handleSubmit = () => {
        if (admin1.name === name && admin1.pass === pass) {
            handleAuth()
            handleIsAdmin()
        }
        else if (admin1.name !== name || admin1.pass !== pass) {
            alert('Wrong login or password')
            setName('')
            setPass('')
        }
    }

    const handleAdmin = () => {
        setAdmin(true)
    }

    if (admin === false) {
        return(
        <div>
            <h1 className={classes.test}>Вы гость или администратор?</h1>
            <button onClick={handleAuth} type="button">Я гость</button>
            <button onClick={handleAdmin} type="button">Я администратор</button>
        </div>)
    }
    else if (admin === true) {
        return(
        <div>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='login...' type="text"></input>
                <input value={pass} onChange={e => setPass(e.target.value)} placeholder='password...' type="password"></input>
                <button onClick={handleSubmit} type="button">подтвердить</button>
            </form>
        </div>)
    }
}

export default AuthPage;