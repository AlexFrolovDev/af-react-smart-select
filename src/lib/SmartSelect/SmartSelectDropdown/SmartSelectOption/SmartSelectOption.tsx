import React, { FC } from "react";
import { SmartSelectOptionWrapper } from "./SmartSelectOption.styled";
import { SmartSelectOptionProps } from "./SmartSelectOption.types";

const SmartSelectOption: FC<SmartSelectOptionProps> = () => {
  return (
    <SmartSelectOptionWrapper data-testid="SmartSelectOptionWrapper">
      SmartSelectOptionWrapper Component
    </SmartSelectOptionWrapper>
  );
};

export default SmartSelectOption;