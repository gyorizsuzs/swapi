import React from 'react';
import './MyButton.module.scss';

const MyButton = ({ color, children }) => (
  <div className='my-button' style={{ backgroundColor: color }}>
    {children}
  </div>
);

export default MyButton;
