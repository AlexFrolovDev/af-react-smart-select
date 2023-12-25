import React, { FC } from "react";
import { SmartSelectDropdownWrapper } from "./SmartSelectDropdown.styled";

interface SmartSelectDropdownProps {}

const SmartSelectDropdown: FC<SmartSelectDropdownProps> = () => {
  return (
    <SmartSelectDropdownWrapper data-testid="SmartSelectDropdownWrapper">
      SmartSelectDropdownWrapper Component
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;