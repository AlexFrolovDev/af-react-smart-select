import React, { FC } from 'react';
import { SmartSelectWrapper } from './SmartSelect.styled';

interface SmartSelectProps {}

const SmartSelect: FC<SmartSelectProps> = () => (
 <SmartSelectWrapper data-testid="SmartSelect">
    SmartSelect Component
 </SmartSelectWrapper>
);

export default SmartSelect;
