import React, { useEffect } from 'react';

import Form from './components/form/Form';
import Loading from './components/loading/Loading';

import './App.scss';

function App(){

    let squareList = undefined;

    const sortNum = (min, max) => {
        return(Math.random(min, max) * (max - min) + min);
    }

    useEffect(() => {
        squareList = document.querySelector('ul');
        for(let i = 0; i < 50; i++){
            const size = Math.round(sortNum(10, 120));
            const position = sortNum(1, 99);
            const delay = sortNum(1000, 15000);
            const time = sortNum(5000, 15000);
            renderSquares(size, position, delay, time)
        }
    });

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
            <Loading />
            <Form />
            <ul className="squares"></ul>
        </>
    );
}

export default App;