import React, { useEffect, useState } from 'react';

import './App.scss';

function App(){

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    let squareList = undefined;

    useEffect(() => {
        const form = document.querySelector('form');
        const body = document.querySelector('body');
        squareList = document.querySelector('ul');
        
        form.addEventListener('animationstart', event => {
            if(event.animationName === 'submit-form'){
                body.style.overflow = 'hidden';
            }
        });
        
        form.addEventListener('animationend', event => {
            if(event.animationName === 'submit-form'){
                form.style.display = 'none';
                body.style.overflow = 'none';
            }
            if(event.animationName === 'submit-failed') {
                form.classList.remove('submit-failed');
            }
        });
    });

    const sortNum = (min, max) => {
        return(Math.random(min, max) * (max - min) + min);
    }

    useEffect(() => {
        for(let i = 0; i < 50; i++){
            const size = Math.round(sortNum(10, 120));
            const position = sortNum(1, 99);
            const delay = sortNum(1000, 15000);
            const time = sortNum(5000, 15000);
            renderSquares(size, position, delay, time)
        }
    });

    const handleEmailField = event => {
        event.preventDefault();
        setEmail(event.target.value);
    }
    
    const handlePasswordField = event => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(email === '' || password === ''){
            event.target.classList.add('submit-failed');
        } else {
            event.target.classList.add('form-hide');
        }
    }

    const renderSquares = (size, position, delay, time) => {
        const li = document.createElement("li");

        li.style.height = `${size}px`;
        li.style.width = `${size}px`;
        li.style.left = `${position}%`;
        li.style.animationDelay = `${delay}ms`
        li.style.animationDuration = `${time}ms`
        li.style.bottom = `-${size}px`
        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

        squareList.appendChild(li);
    }

    return(
        <>
            <section className="form-section">
                <h1>Enter the Rocket</h1>
                <div className="form-wrapper">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="input-block">
                            <label htmlFor="login-email">Email</label>
                            <input type="email" id="login-email" onChange={e => handleEmailField(e)} value={email} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="login-password">Password</label>
                            <input type="password" id="login-password" onChange={e => handlePasswordField(e)} value={password} />
                        </div>
                        <button type="submit" className="btn-login">Login</button>
                    </form>
                </div>
            </section>
            <ul className="squares"></ul>
        </>
    );
}

export default App;