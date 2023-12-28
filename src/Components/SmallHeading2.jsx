import React from 'react'

function SmallHeading2({ value }) {
    return (
        <>
            <div className='flex items-center mb-7'>
                <i className="fa-solid fa-square fa-2xs text-blue-600"></i>
                <h1 className='px-5 text-sm'>{value}</h1>
                <i className="fa-solid fa-square fa-2xs text-blue-600"></i>
            </div>
        </>
    )
}

export default SmallHeading2