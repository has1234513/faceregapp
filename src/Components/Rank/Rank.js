import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, here is how many images you have placed for face detection`}
            </div>
            <div className='white f1'>
            {entries}
            </div>
        </div>
    );
}

export default Rank;