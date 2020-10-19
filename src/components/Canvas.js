import React from 'react';
import {StyledCanvas} from './styles/StyledCanvas';
import Poop from './Poop';
import Item from './Item';

const Canvas = ({canvas}) => (
    <StyledCanvas height="700px" width="700px">
        <Poop />
        <Item />
    </StyledCanvas>
)

export default Canvas;
