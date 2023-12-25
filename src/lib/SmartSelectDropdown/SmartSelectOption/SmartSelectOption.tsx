import React, { FC } from "react";
import { SmartSelectOptionWrapper } from "./SmartSelectOption.styled";

interface SmartSelectOptionProps {}

const SmartSelectOption: FC<SmartSelectOptionProps> = () => {
  return (
    <SmartSelectOptionWrapper data-testid="SmartSelectOptionWrapper">
      SmartSelectOptionWrapper Component
    </SmartSelectOptionWrapper>
  );
};

export default SmartSelectOption;