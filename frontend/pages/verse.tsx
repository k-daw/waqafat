import React from 'react'
import Word from "./word";


type VerseProps = {
    text: string;
}

function Verse({ text }: VerseProps) {

    const words = text.split(' ');

    return <div style={{ direction: 'rtl', width: '100px' }}> {
        words.map((word, key) => 
            <Word key={key} text={word} />
    )} </div>;
}

export default Verse;
