import React, { MouseEvent } from 'react';
import { useState } from 'react';

type WordProps = {
    index: number;
    text: string;
    onSelectionChange: Function;
}

function Word( { index, text, onSelectionChange} : WordProps) {
    
    const [color, setColor] = useState('red');
    const [clickCounter, setClickCounter] = useState(0);

    const hanldeOnChange = (event: MouseEvent) => {
        event.preventDefault();
        setColor(color === 'red' ?'yellow': 'red');
        setClickCounter(clickCounter + 1);
        console.log({index});
        onSelectionChange(index);
    }

    console.log('text: ', text);
    for (let i = 0; i < text.length; i++) {
        console.log('\u0627\u0644\u0644\u0647');
        console.log(`Character Code: ${text.charCodeAt(i)} || Char: ${text.charAt(i)} `);
    }
    return <div onClick={hanldeOnChange} >
        { text }
        &nbsp;
        { clickCounter }
        <br />

    </div>;
}

export default Word;
