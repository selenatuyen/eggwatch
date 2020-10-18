import React from 'react';
import {StyledCanvas} from './styles/StyledCanvas';
import Poop from './Poop';

const Canvas = ({canvas}) => (
    <StyledCanvas height="700px" width="700px">
        <Poop />
    </StyledCanvas>
)

export default Canvas;
