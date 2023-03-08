import React, { useState } from 'react';

function SearchBar (props) {
    const [selectedOption, setSelectedOption] = useState('title');
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const value = {
            selectedOption: selectedOption,
            searchTerm: searchTerm
        }
        props.searchTable(value);
        reset();
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const reset = () => {
        setSelectedOption('title');
        setSearchTerm('');
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type='text'
                    placeholder='Search'
                    value={searchTerm}
                    name='searchTerm'
                    onChange={e => setSearchTerm(e.target.value)}/><br/>
                <label>Search Fields:</label>
                <label>
                <input type="radio" value="title" 
                          checked={selectedOption === 'title'} 
                          onChange={handleOptionChange} />
                    Title
                </label>
                <label>
                    <input type="radio" value="actor" 
                        checked={selectedOption === 'actor'} 
                        onChange={handleOptionChange} />
                    Actor
                </label>
                <label>
                    <input type="radio" value="director" 
                        checked={selectedOption === 'director'} 
                        onChange={handleOptionChange} />
                    Director
                </label>
        </form>
    )
}

export default SearchBar;