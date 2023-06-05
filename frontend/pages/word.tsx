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

    return <div onClick={hanldeOnChange} >
        { text }
        &nbsp;
        <br />

    </div>;
}

export default Word;
