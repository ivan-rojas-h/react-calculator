import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addValueToScreen = val => {
    setInput(input + val);
  };

  const calcResult = () => {
    try {
      if (input){
        setInput(evaluate(input));      
      }
    }catch {
      setInput('Syntax Error');
    }
  };

  return (
    <div className='App'>
      <h1>React Calculator</h1>
      <div className='main-container'>
        <Input input={input} />
        <div className='row'>
          <Button manageClick={addValueToScreen}>1</Button>
          <Button manageClick={addValueToScreen}>2</Button>
          <Button manageClick={addValueToScreen}>3</Button>
          <Button manageClick={addValueToScreen}>+</Button>
        </div>
        <div className='row'>
          <Button manageClick={addValueToScreen}>4</Button>
          <Button manageClick={addValueToScreen}>5</Button>
          <Button manageClick={addValueToScreen}>6</Button>
          <Button manageClick={addValueToScreen}>-</Button>
        </div>
        <div className='row'>
          <Button manageClick={addValueToScreen}>7</Button>
          <Button manageClick={addValueToScreen}>8</Button>
          <Button manageClick={addValueToScreen}>9</Button>
          <Button manageClick={addValueToScreen}>*</Button>
        </div>
        <div className='row'>
          <Button manageClick={calcResult}>=</Button>
          <Button manageClick={addValueToScreen}>0</Button>
          <Button manageClick={addValueToScreen}>.</Button>
          <Button manageClick={addValueToScreen}>/</Button>
        </div>
        <div className='row'>
          <ClearButton manageClear={() => setInput('')}>
            CLEAR
          </ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;