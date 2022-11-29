import React from 'react'

const RowContainer = (props) => {
    return (
        <div className='row justify-content-center'>
            {props.children}
        </div>
    )
}

export default RowContainer