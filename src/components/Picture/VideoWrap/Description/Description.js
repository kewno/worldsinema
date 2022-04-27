import React from 'react';
import '../../../../style.scss';

const Description = (props) => {
    return (
        <div className="description">
            <h3>Описание</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Description;