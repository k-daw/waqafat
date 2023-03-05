import React, { MouseEvent } from 'react';
import { useState } from 'react';
type WordProps = {
    text: string;
}

function Word( {text} : WordProps) {
    
    const [color, setColor] = useState('red');
    const [clickCounter, setClickCounter] = useState(0);
    console.log({color});

    const hanldeOnChange = (event: MouseEvent) => {
        event.preventDefault();
        console.log('clicked');
        setColor(color === 'red' ?'yellow': 'red');
        setClickCounter(clickCounter + 1);
    }
    return <div style={{color}} onClick={hanldeOnChange} >
        { text }
        &nbsp;
        { clickCounter }
        <br />

    </div>;
}

export default Word;
