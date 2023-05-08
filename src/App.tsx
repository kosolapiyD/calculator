import { useContext, useState } from 'react';
import './styles/main.scss';

import CalcHeader from './components/calc-header/CalcHeader';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [currentOperand, setCurrentOperand] = useState('');
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', 'x', '+', '-'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  console.log('calculation', calculation);
  console.log('currentOperand', currentOperand);
  const updateCalculation = (value: string) => {
    console.log('value clicked', value);
    const isValueOperator = operators.includes(value);
    const isValueDot = value === '.';
    const isValueDigit = digits.includes(value);

    const isLastCharOperator = operators.includes(calculation.slice(-1));

    if (isValueDigit || isValueDot) {
      if (
        // can't add dot first
        (isValueDot && currentOperand === '') ||
        // can't add dot if there is already one
        (isValueDot && currentOperand.includes('.')) ||
        // only one zero at the beginning
        (value === '0' && currentOperand === '0') ||
        // only operand or dot after zero
        (isValueDigit && (calculation === '0' || currentOperand === '0'))
      )
        return;

      setCurrentOperand(currentOperand + value);
    }

    if (isValueOperator) {
      // change operator to the last one if it's not the same
      if (isLastCharOperator && calculation.slice(-1) !== value) {
        setCalculation(calculation.slice(0, -1) + value);
      }

      // can't add operator first or if there is already one
      if (calculation === '' || isLastCharOperator) return;

      setCalculation(calculation + currentOperand + value);
      setCurrentOperand('');
    }

    setCalculation(calculation + value);
    !isValueOperator &&
      setResult(eval(calculation.replace(/x/g, '*') + value).toString());
  };

  const calculate = () => {
    setCalculation(eval(calculation.replace(/x/g, '*')).toString());
    setCurrentOperand('');
  };

  const deleteLast = () => {
    // remove last char from calculation
    if (calculation === '') return;
    setCalculation(calculation.slice(0, -1));
    // remove last char from current operand also
    if (currentOperand === '') return;
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const reset = () => {
    setCalculation('');
    setResult('');
    setCurrentOperand('');
  };

  const handleBtnClick = (value: string) => {
    switch (value) {
      case '=':
        calculate();
        break;
      case 'RESET':
        reset();
        break;
      case 'DEL':
        deleteLast();
        break;
      default:
        updateCalculation(value);
        break;
    }
  };

  const buttonsSigns: string[] = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
    'RESET',
    '=',
  ];
  const buttons: JSX.Element[] = buttonsSigns.map((sign: string) => {
    return (
      <button
        key={sign}
        onClick={() => handleBtnClick(sign)}
        className={`${
          sign === 'RESET' ? 'span-two' : '' || sign === '=' ? 'span-two' : ''
        }`}
      >
        {sign}
      </button>
    );
  });

  return (
    <div className={`calc-wrapper ${theme}`}>
      <div className='container'>
        <CalcHeader />
        <div className='calc-screen theme-text'>
          {/* {result ? <span>({result})</span> : ''}&nbsp;{calculation || '0'} */}
          <span className='calculation-txt'>{calculation}</span>
          <span className='result-txt'>{result}</span>
        </div>
        <div className='calc-body'>{buttons}</div>
      </div>
    </div>
  );
};

export default App;
