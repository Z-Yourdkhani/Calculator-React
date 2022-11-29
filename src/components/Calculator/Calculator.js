import React from 'react'
import RowContainer from '../RowContainer/RowContainer'
import OperationBtn from '../OperationBtn/OperationBtn'
import NumberBtn from '../NumberBtn/NumberBtn'

const Calculator = () => {
  return (

    <div className='container py-5'>
      <h1 className='text-center pb-5'>Calculator with React</h1>
      <div className='d-flex justify-content-center ' >
        <div className=' p-5 shadow-lg rounded'>
          <div className='row mb-1'>
            <input className='rounded p-3' />
          </div>
          <RowContainer>
            <OperationBtn value={'AC'} />
            <OperationBtn value={'DEL'} />
            <OperationBtn value={'×'} />
          </RowContainer>

          <RowContainer>
            <NumberBtn value={'9'} />
            <NumberBtn value={'8'} />
            <NumberBtn value={'7'} />
            <OperationBtn value={'÷'} />
          </RowContainer>

          <RowContainer>
            <NumberBtn value={'6'} />
            <NumberBtn value={'5'} />
            <NumberBtn value={'4'} />
            <OperationBtn value={'+'} />
          </RowContainer>

          <RowContainer>
            <NumberBtn value={'3'} />
            <NumberBtn value={'2'} />
            <NumberBtn value={'1'} />
            <OperationBtn value={'-'} />
          </RowContainer>

          <RowContainer>
            <OperationBtn value={'='} />
            <NumberBtn value={'0'} />
            <OperationBtn value={'.'} />
          </RowContainer>
        </div>
      </div>
    </div>
  )
}

export default Calculator