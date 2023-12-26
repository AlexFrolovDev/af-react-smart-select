import React, { FC } from "react";
import { SelectedValuesBoxWrapper } from "./SelectedValuesBox.styled";
import { SelectedValuesBoxProps } from "./SelectedValuesBox.types";

const SelectedValuesBox: FC<SelectedValuesBoxProps> = () => {
  return (
    <SelectedValuesBoxWrapper data-testid="SelectedValuesBoxWrapper">
      SelectedValuesBox Component
    </SelectedValuesBoxWrapper>
  );
};

export default SelectedValuesBox;