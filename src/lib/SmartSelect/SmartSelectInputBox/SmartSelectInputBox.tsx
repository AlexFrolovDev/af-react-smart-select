import React, { FC } from "react";
import { SmartSelectInputBoxWrapper } from "./SmartSelectInputBox.styled";

interface SmartSelectInputBoxProps {}

const SmartSelectInputBox: FC<SmartSelectInputBoxProps> = () => {
  return (
    <SmartSelectInputBoxWrapper data-testid="SmartSelectInputBoxWrapper">
      SmartSelectInputBoxWrapper Component
    </SmartSelectInputBoxWrapper>
  );
};

export default SmartSelectInputBox;