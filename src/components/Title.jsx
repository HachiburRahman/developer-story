import React from 'react';

const Title = ({children}) => {
    return (
        <div className='text-3xl font-bold bg-linear-60 from-blue-100 to-blue-400 px-4 py-3 rounded text-black'>
            {children}
        </div>
    );
};

export default Title;