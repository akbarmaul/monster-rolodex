import React from 'react';
import Card from '../card/card.component';
import './cardlist.styles.css';

const Cardlist = ({monsters}) => {
    const monsterCard = monsters.map(monster => 
        <Card key={monster.id} monster={monster}/>
    );

    return(
        <div className='card-list'>
            
            {monsterCard}
        </div>
    );
};

export default Cardlist;