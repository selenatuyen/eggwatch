import React from 'react';
import {StyledCanvas} from './styles/StyledCanvas';
import Poop from './Poop';
import Item from './Item';
import Chingu from './Chingu';

const Canvas = ({canvas}) => (
    <StyledCanvas height="700px" width="700px">
        <Poop />
        <Item />
        <Chingu />
    </StyledCanvas>
)

export default Canvas;
