import React from 'react';


const Card = ({ name, email, id }) => {
    return (
        <div className='bg-orange dib br3 grow pa3 ma3 bw3 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=180x150`} alt="robot"/>
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      </div>  
    );
}

export default Card;