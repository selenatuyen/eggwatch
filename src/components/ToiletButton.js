import React from 'react';
import {StyledButton} from './styles/StyledButton';

const ToiletButton = ({callback}) => (
    <StyledButton onClick={callback}>Use Toilet</StyledButton>
);

export default ToiletButton;