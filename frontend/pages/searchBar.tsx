
import React, { useState } from 'react'
import { Input } from 'antd';
function SearchBar() {

    const [query, setQuery] = useState("بسم الله الرحمن الرحيم");
    
    function handleOnChange(event: React.FormEvent) {
        event.preventDefault();
        const query = event.target?.value;

        if (typeof query !== "string") {
            return;
        }

        setQuery(query);
    }

    return (
        <Input
            type="text"
            value={query}
            onChange={handleOnChange}
        />
    );
};

export default SearchBar;
