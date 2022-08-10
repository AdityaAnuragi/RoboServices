import React from 'react';

const Search = (props) => {
    const {searchChange} = props;
    return (
        <div>
            <input className='search_cls' 
            type = 'search' 
            placeholder={`Search Robot's Name`}
            onChange = {searchChange}/>
        </div>
    )
}


export default Search;