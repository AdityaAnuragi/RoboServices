import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const {robots} = props;
    const cardComponent = robots.map((user,i) => {
        return <Card key={i}  id={user.id} name={user.name} email={user.email} phone={user.phone}/>
    })
    return (
        <div className='container two'>
            {cardComponent}
        </div>
    )
}


export default CardList;