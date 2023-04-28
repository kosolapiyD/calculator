import { useContext, useState } from 'react';
import './styles/main.scss';

import CalcHeader from './components/calc-header/CalcHeader';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', 'x', '+', '-', '.'];

  const updateCalculation = (value: string) => {
    if (
      (operators.includes(value) && calculation === '') ||
      (operators.includes(value) && operators.includes(calculation.slice(-1)))
    )
      return;

    setCalculation(calculation + value);

    if (!operators.includes(value)) {
      setResult(eval(calculation + value).toString());
    }
  };

  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };

  const deleteLast = () => {
    if (calculation === '') return;
    setCalculation(calculation.slice(0, -1));
  };

  const reset = () => {
    setCalculation('');
    setResult('');
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
          {result ? <span>({result})</span> : ''}&nbsp;{calculation || '0'}
        </div>
        <div className='calc-body'>{buttons}</div>
      </div>
    </div>
  );
};

export default App;
