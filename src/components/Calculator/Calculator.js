import React, { useState } from 'react'
import RowContainer from '../RowContainer/RowContainer'
import OperationBtn from '../OperationBtn/OperationBtn'
import NumberBtn from '../NumberBtn/NumberBtn'
// ----------- states ---------------
const Calculator = () => {
  const [currnet, setCurrent] = useState('')
  const [previous, setPrevious] = useState('')
  const [operation, setOperation] = useState('')
// ----------- functions -------------
  const appendValue = (event) => {
    const value = event.target.value
    if (value === '.' && currnet.includes('.')) return;
    setCurrent(currnet + value)
  }

  const handleDelete = () => {
    setCurrent(currnet.slice(0, -1))
  }

  const handleAllDelete = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')
  }

  const handleOperation = (event) => {
    if (currnet === '') return
    if (previous !== '') {
      let val = compute()
      setPrevious(val)
    } else {
      setPrevious(currnet)
    }
    setCurrent('')
    setOperation(event.target.value)
  }

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous)
    let currnetNumber = parseFloat(currnet)
    switch (operation) {
      case '+':
        result = previousNumber + currnetNumber
        break
      case '-':
        result = previousNumber - currnetNumber
        break
      case '×':
        result = previousNumber * currnetNumber
        break
      case '÷':
        result = previousNumber / currnetNumber
        break
      default:
        return;
    }
    return result
  }

  const handleEqual = () => {
    let val = compute()
    if (val === undefined || val === null) return

    setCurrent(val)
    setPrevious('')
    setOperation('')
  }
  // ----------- return ------------
  return (
    <div className='container py-5'>
      <h1 className='text-center pb-5'>Calculator with React</h1>
      <div className='d-flex justify-content-center ' >
        <div className=' p-5 shadow-lg rounded'>
          <div className='row' style={{ width: '250px', height: '130px' }}>
            <p className='rounded py-1 my-2 bg-light overflow-hidden h-25'>{previous}{operation}</p>
            <p className='rounded py-3  bg-dark text-light overflow-hidden h-50'>{currnet}</p>

          </div>
          <RowContainer>
            <OperationBtn value={'AC'} clicked={handleAllDelete} />
            <OperationBtn value={'DEL'} clicked={handleDelete} />
            <OperationBtn value={'×'} clicked={handleOperation} />
          </RowContainer>

          <RowContainer>
            <NumberBtn value={'9'} clicked={appendValue} />
            <NumberBtn value={'8'} clicked={appendValue} />
            <NumberBtn value={'7'} clicked={appendValue} />
            <OperationBtn value={'÷'} clicked={handleOperation} />
          </RowContainer>

          <RowContainer>
            <NumberBtn value={'6'} clicked={appendValue} />
            <NumberBtn value={'5'} clicked={appendValue} />
            <NumberBtn value={'4'} clicked={appendValue} />
            <OperationBtn value={'+'} clicked={handleOperation} />
          </RowContainer>

          <RowContainer>
            <NumberBtn value={'3'} clicked={appendValue} />
            <NumberBtn value={'2'} clicked={appendValue} />
            <NumberBtn value={'1'} clicked={appendValue} />
            <OperationBtn value={'-'} clicked={handleOperation} />
          </RowContainer>

          <RowContainer>
            <OperationBtn value={'='} clicked={handleEqual} />
            <NumberBtn value={'0'} clicked={appendValue} />
            <OperationBtn value={'.'} clicked={appendValue} />
          </RowContainer>
        </div>
      </div>
    </div>
  )
}

export default Calculator