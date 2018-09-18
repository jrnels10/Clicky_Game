import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card col-4 m-auto">
        <div className="img-container">
            <span onClick={() => props.ShuffleFriend(props.id)} className="shuffle">
                <img className='profile-image' alt={props.name} src={props.image} />
            </span>
        </div>

    </div>
)

export default Card;