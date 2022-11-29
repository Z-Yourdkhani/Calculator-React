import React from 'react'

const OperationBtn = (props) => {
  return (
    <>
        <input className='col btn btn-dark m-1' value={props.value} type='button'/>
    </>
  )
}

export default OperationBtn