import React from 'react';
import {StyledButton} from './styles/StyledButton';

const ItemButton = ({callback}) => (
    <StyledButton onClick={callback}>Use Item</StyledButton>
);

export default ItemButton;