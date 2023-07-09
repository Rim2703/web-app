import React from 'react';

const SearchBar = ({ handleSearch }) => {

    const handleChange = event => {
        handleSearch(event.target.value)
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search by name..." onChange={handleChange} />
        </div>
    )
}

export default SearchBar;
