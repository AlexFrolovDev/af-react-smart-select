import React, { FC } from "react";
import {
  OptionSeparatorLabel,
  OptionSeparatorStrike,
  OptionSeparatorWrapper,
} from "./OptionSeparator.styled";
import { OptionSeparatorProps } from "./OptionSeparator.types";

const OptionSeparator: FC<OptionSeparatorProps> = (props) => {
  return (
    <OptionSeparatorWrapper data-testid="OptionSeparatorWrapper">
      <OptionSeparatorStrike />
      <OptionSeparatorLabel>{props.children}</OptionSeparatorLabel>
    </OptionSeparatorWrapper>
  );
};

export default OptionSeparator;
