import React from 'react';
import Card from './Card'
// import { robots } from './robots';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((u, i) => {
                    return (
                        <Card key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;