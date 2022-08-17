import React from 'react';

const   Card = (props) => {
    const {id,name,email,phone} = props; 
    return(
        <div className='container one'>            
            <div className='card'>
                <img alt = 'one' src = {`https://robohash.org/${id}?size=250x250`}/>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>Phone number is {phone}</p>
            </div>
        </div>
    )
}


export default Card