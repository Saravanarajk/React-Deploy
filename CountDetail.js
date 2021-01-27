import React from 'react';

const CountDetail = (props) => {
    return (
        <div>
            <h3>Well Done! It took you {props.count} attempts to guess this number</h3>
            <button onClick={() => window.location.reload(false)}>start new game</button>
        </div>
    )
}
export default CountDetail;