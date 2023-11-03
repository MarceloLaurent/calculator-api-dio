import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

import { Container, Content, Row } from "./styles"; 

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleOnCLear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleClearCurrentNumber = () => {
    setCurrentNumber('0')
  }
  
  const handleBackspace = () => {
    setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1))
    if(currentNumber.length === 1){
      setCurrentNumber('0');
    }
  }

  const handleAddNumber = (number) => {
    if(currentNumber[currentNumber.length - 1] !== 'o'){
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    } else {
      setCurrentNumber(number);
    }
  }

  const handleAddDot = () => {
    if(!currentNumber.includes('.')){
      if(currentNumber[currentNumber.length - 1] !== 'o'){
        setCurrentNumber(prev => `${prev}${'.'}`)
      } else{
        setCurrentNumber('0.');
      }
    }
  }

  const handleSum = (number) => {

    if(firstNumber === '0' && operation === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleSubtraction = (number) => {

    if(firstNumber === '0' && operation === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction));
      setOperation('');
    }

  }

  const handleMultiplication = (number) => {

    if(firstNumber === '0' && operation === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation('');
    }

  }

  const handleDivision = (number) => {

    if(firstNumber === '0' && operation === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('÷');
    }else if(currentNumber === '0') {
      setCurrentNumber('Cannot divide by zero');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }

  }

  const handleSquare = (number) => {
      const square = Number(currentNumber) * Number(currentNumber);
      setCurrentNumber(String(square));
  }

  const handleSquareRoot = (number) => {
    const squareRoot = Math.sqrt(Number(currentNumber));
    setCurrentNumber(String(squareRoot));  
  }

  const handleReciprocalNumber = (number) => {
     const reciprocal = 1 / Number(currentNumber);
    setCurrentNumber(String(reciprocal));
    }

  const handlePercent = (number) => {
      setCurrentNumber(String(currentNumber));
      const percent = currentNumber / 100;
      setCurrentNumber(String(percent));
  }

  const handleOpposite = (number) => {
    const opposite = -1 * Number(currentNumber);
    setCurrentNumber(String(opposite));
  }

  const handleEquals = () => {

    if(operation !== ''){
      switch(operation) {
        case '+':
          handleSum();
          break;
        case '-':
          handleSubtraction();
          break;
        case 'x':
          handleMultiplication();
          break;
        case '÷':
          handleDivision();
          break;
        default:
          break;  
      }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={'%'} onClick={handlePercent}/>
          <Button label={'CE'} onClick={handleClearCurrentNumber}/>
          <Button label={'C'} onClick={handleOnCLear}/>
          <Button label={'⌦'} onClick={handleBackspace}/>
        </Row>
        <Row>
          <Button label={'1/x'} onClick={handleReciprocalNumber}/>
          <Button label={'x²'} onClick={handleSquare}/>
          <Button label={'√x'} onClick={handleSquareRoot}/>
          <Button label={'÷'} onClick={handleDivision}/>
        </Row>
        <Row>
          <Button label={'7'} onClick={() => handleAddNumber('7')}/>
          <Button label={'8'} onClick={() => handleAddNumber('8')}/>
          <Button label={'9'} onClick={() => handleAddNumber('9')}/>
          <Button label={'x'} onClick={handleMultiplication}/>
        </Row>
        <Row>
          <Button label={'4'} onClick={() => handleAddNumber('4')}/>
          <Button label={'5'} onClick={() => handleAddNumber('5')}/>
          <Button label={'6'} onClick={() => handleAddNumber('6')}/>
          <Button label={'-'} onClick={handleSubtraction}/>
        </Row>
        <Row>
          <Button label={'1'} onClick={() => handleAddNumber('1')}/>
          <Button label={'2'} onClick={() => handleAddNumber('2')}/>
          <Button label={'3'} onClick={() => handleAddNumber('3')}/>
          <Button label={'+'} onClick={handleSum}/>
        </Row>
        <Row>
          <Button label={'±'} onClick={handleOpposite}/>
          <Button label={'0'} onClick={() => handleAddNumber('0')}/>
          <Button label={','} onClick={() => handleAddDot()}/>
          <Button label={'='} variant="secondary" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
