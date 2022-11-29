import React from 'react'

const NumberBtn = (props) => {  
    return (
        <>
            <input className='col btn btn-outline-dark m-1' type='button' value={props.value} onClick={props.clicked}/>
        </>
    )
}

export default NumberBtn