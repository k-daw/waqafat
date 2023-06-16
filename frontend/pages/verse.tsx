import React, { useState } from 'react'
import Word from "./word";


type VerseProps = {
    text: string;
}

function Verse({ text }: VerseProps) {
    const [selectWords, setSelectedWords] = useState<number []>([]);

    const words = text.split(' ');

    function handleOnSelectionChange(selectedIndex: number) {
        const index = selectWords.indexOf(selectedIndex);

        if (index === -1) {
            const newSelection = [...selectWords, selectedIndex].sort();

            setSelectedWords(newSelection);
            return;
        }

        const newSelection = selectWords.filter((i) => i !== selectedIndex);
        setSelectedWords(newSelection);
    }

    return <div style={{ direction: 'rtl', width: 'auto' }}> 

        <h2>
            {selectWords.map((s, i) => <span key={i}> { words[s] } </span>)}
        </h2>
        {
            words.map((word, key) => 
                <Word key={key} index={key} text={word} onSelectionChange={handleOnSelectionChange}/>
        )
        } 
    </div>;
}

export default Verse;
