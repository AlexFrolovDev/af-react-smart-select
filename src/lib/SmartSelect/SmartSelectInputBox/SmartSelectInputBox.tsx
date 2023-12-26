import React, { FC } from "react";
import { SmartSelectInputBoxWrapper } from "./SmartSelectInputBox.styled";
import { SmartSelectInputBoxProps } from "./SmartSelectInputBox.types";

const SmartSelectInputBox: FC<SmartSelectInputBoxProps> = () => {
  return (
    <SmartSelectInputBoxWrapper data-testid="SmartSelectInputBoxWrapper">
      SmartSelectInputBoxWrapper Component
    </SmartSelectInputBoxWrapper>
  );
};

export default SmartSelectInputBox;