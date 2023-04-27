import React, { useContext } from 'react';

import './CalcHeader.scss';
import { ThemeContext } from '../../context/ThemeContext';

const CalcHeader = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleThemeSwitchClick = ({ target }: React.MouseEvent) => {
    const { innerText } = target as HTMLElement;
    switch (innerText) {
      case '1':
        return setTheme('first-theme');
      case '2':
        return setTheme('second-theme');
      case '3':
        return setTheme('third-theme');
    }
  };

  return (
    <div className='calc-header'>
      <div className='left-box'>
        <span className='theme-text'>calc</span>
      </div>
      <div className='right-box'>
        <span className='theme-text'>THEME</span>
        <div onClick={(e) => handleThemeSwitchClick(e)}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </div>
  );
};

export default CalcHeader;
