import React, { useEffect, useState } from 'react';

import './Form.scss';

function Form() {
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(() => {
        const form = document.querySelector('form');
        const body = document.querySelector('body');
        
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

    return(
        <section className="form-section">
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
    );
}

export default Form;