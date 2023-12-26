import React, { FC } from "react";
import { SmartSelectInputBoxWrapper } from "./SmartSelectInputBox.styled";
import { SmartSelectInputBoxProps } from "./SmartSelectInputBox.types";

const SmartSelectInputBox: FC<SmartSelectInputBoxProps> = (props) => {
  const { text, placeholder, onChange } = props;
  return (
    <SmartSelectInputBoxWrapper data-testid="SmartSelectInputBoxWrapper">
      {text || placeholder}
    </SmartSelectInputBoxWrapper>
  );
};

export default SmartSelectInputBox;
