import React from 'react'

const OperationBtn = (props) => {
  return (
    <>
        <input className='col btn btn-dark m-1' type='button'  value={props.value} onClick={props.clicked}/>
    </>
  )
}

export default OperationBtn