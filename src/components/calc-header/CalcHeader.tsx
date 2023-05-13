import React, { useContext, useState } from 'react';

import './CalcHeader.scss';
import { ThemeContext } from '../../context/ThemeContext';

const CalcHeader = () => {
  const buttonsArr = ['1', '2', '3'];

  const { setTheme } = useContext(ThemeContext);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('1');

  const isRadioSelected = (value: string): boolean =>
    selectedRadioBtn === value;

  const handleRadioClick = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioBtn(target.value);
    switch (target.value) {
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
        <div className='switch'>
          <div className='switch-labels'>
            {buttonsArr.map((value) => (
              <label
                key={value}
                htmlFor={value}
                className='switch-label theme-text'
              >
                {value}
              </label>
            ))}
          </div>
          <div className='switch-buttons'>
            {buttonsArr.map((value) => (
              <div className='switch-radio-item theme-text'>
                <input
                  name='switch'
                  id={value}
                  type='radio'
                  value={value}
                  checked={isRadioSelected(value)}
                  onChange={handleRadioClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcHeader;
