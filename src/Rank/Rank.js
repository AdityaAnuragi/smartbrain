import React from 'react';

const Rank = ({info}) => {
    
    return (
        <div>
            <p className='Rank Head'>{`${info.userEmail}, your current entries are ...`}</p>
            <p className='Rank Num'>{`#${info.userEntries}`}</p>
        </div>
    )
}


export default Rank;