import React, { FC } from "react";
import { SmartSelectWrapper } from "./SmartSelect.styled";
import { SmartSelectProps } from "./SmartSelect.types";

const SmartSelect: FC<SmartSelectProps> = (props: SmartSelectProps) => {
  return (
    <SmartSelectWrapper data-testid="SmartSelect">
      SmartSelect Component
    </SmartSelectWrapper>
  );
};

export default SmartSelect;
