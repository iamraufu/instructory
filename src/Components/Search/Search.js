import './Search.css'
import React from 'react';

const Search = () => {
    return (
        <div className='container d-flex justify-content-center mt-5'>
            <input type="text" class='course-search' placeholder='Start Learning! Ex:Fiverr Freelancing Crash Course ' />
            <button class='btn-sa'>Search Anything</button>
        </div>
    );
};

export default Search;