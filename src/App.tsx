import { useContext, useState } from 'react';
import './styles/main.scss';

import CalcHeader from './components/calc-header/CalcHeader';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`calc-wrapper ${theme}`}>
      <div className='container'>
        <CalcHeader />
        <div className='calc-screen theme-text'>399,982</div>
        <div className='calc-body'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>DEL</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
          <button className='span-two'>RESET</button>
          <button className='span-two'>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
