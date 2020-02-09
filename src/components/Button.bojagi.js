import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
};

export const ButtonPrimary = () => 
  <Button variant="primary">
    Primary
  </Button>

export const ButtonSecondary = () => 
  <Button variant="secondary">
    Secondary
  </Button>
 
export const ButtonWarning = () =>
  <Button variant="warning">
    Warning! Warning!
  </Button>

export const ButtonSuccess = () =>
  <Button variant="success">
    Great Success!
  </Button>

export const buttonDanger = () =>
  <Button variant="danger">
    Danger, danger. High Voltage!
  </Button>
