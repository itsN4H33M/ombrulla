import React from 'react'

function SmallHeading({ value }) {
    return (
        <>
            <div className='flex items-center mb-7'>
                <i className="fa-solid fa-square fa-2xs text-blue-600"></i>
                <h1 className='font-bold pl-5 text-sm'>{value}</h1>
            </div>
        </>
    )
}

export default SmallHeading