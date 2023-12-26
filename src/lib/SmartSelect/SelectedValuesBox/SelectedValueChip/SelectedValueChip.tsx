import React, { FC } from "react";
import { SelectedValueChipWrapper } from "./SelectedValueChip.styled";
import { SelectedValueChipProps } from "./SelectedValueChip.types";

const SelectedValueChip: FC<SelectedValueChipProps> = () => {
  return (
    <SelectedValueChipWrapper data-testid="SelectedValueChipWrapper">
      SelectedValueChip Component
    </SelectedValueChipWrapper>
  );
};

export default SelectedValueChip;