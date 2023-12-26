import React, { FC } from "react";
import { SmartSelectDropdownWrapper } from "./SmartSelectDropdown.styled";
import { SmartSelectDropdownProps } from "./SmartSelectDropdown.types";

const SmartSelectDropdown: FC<SmartSelectDropdownProps> = () => {
  return (
    <SmartSelectDropdownWrapper data-testid="SmartSelectDropdownWrapper">
      SmartSelectDropdownWrapper Component
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;