
import React, { FC } from 'react';
import { SmartSelectWrapper } from './SmartSelect.styled';

export type SmartSelectOptionType = {
    label: string;
    value: string;
};

export interface SmartSelectProps {
   disabled?: boolean;
   placeholder?: string;
   options: SmartSelectOptionType[];
   multiSelect?: boolean;
   searchable?: boolean;
}

const SmartSelect: FC<SmartSelectProps> = (props: SmartSelectProps) => {
   
 return <SmartSelectWrapper data-testid="SmartSelect">
    SmartSelect Component
 </SmartSelectWrapper>
};

export default SmartSelect;
