import React from 'react';
import './searchbox.styles.css';

const SearchBox = ({onSearchChange}) => {
    return (
        <input className='search' type='search' placeholder='Search Monsters' onChange={onSearchChange}/>
    )
}

export default SearchBox;