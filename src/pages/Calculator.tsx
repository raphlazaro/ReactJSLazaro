// Calculator.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button, InputGroup, FormControl, Container } from 'react-bootstrap';
import '../styles/Calculator.css';

export default function Calculator() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(input).toString();
        setInput(calculatedResult);
        setResult(calculatedResult);
      } catch (error) {
        setInput('SYNTAX ERROR');
        setResult('SYNTAX ERROR');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <Layout>
      <div className="calculator-base-container">
      <div className="calculator-txt">
        <h3 className="calculator-desc"> CALCULATOR </h3>
      </div>
      <div className="calculator-container">
        <div className="calculator-input">
        <InputGroup>
          <FormControl
            placeholder="Enter number"
            value={input}
            readOnly
          />
        </InputGroup>
        </div>
        <div className="calculator-buttons">
          <div className="calculator-row">
            {[7, 8, 9, '/'].map((value) => (
              <Button key={value} variant="secondary" onClick={() => handleButtonClick(value.toString())}>
                {value}
              </Button>
            ))}
          </div>
          <div className="calculator-row">
            {[4, 5, 6, '*'].map((value) => (
              <Button key={value} variant="secondary" onClick={() => handleButtonClick(value.toString())}>
                {value}
              </Button>
            ))}
          </div>
          <div className="calculator-row">
            {[1, 2, 3, '-'].map((value) => (
              <Button key={value} variant="secondary" onClick={() => handleButtonClick(value.toString())}>
                {value}
              </Button>
            ))}
          </div>
          <div className="calculator-row">
            <Button variant="danger" onClick={() => handleButtonClick('C')}>
              C
            </Button>
            <Button variant="secondary" onClick={() => handleButtonClick('0')}>
              0
            </Button>
            <Button variant="secondary" onClick={() => handleButtonClick('=')}>
              =
            </Button>
            <Button variant="secondary" onClick={() => handleButtonClick('+')}>
              +
            </Button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
