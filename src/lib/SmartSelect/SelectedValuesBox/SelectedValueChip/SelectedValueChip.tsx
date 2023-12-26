import React, { FC } from "react";
import {
  SelectedValueChipLabel,
  SelectedValueChipRemove,
  SelectedValueChipWrapper,
} from "./SelectedValueChip.styled";
import { SelectedValueChipProps } from "./SelectedValueChip.types";

const SelectedValueChip: FC<SelectedValueChipProps> = (props) => {
  const { label, transparent, onRemoveClick } = props;
  return (
    <SelectedValueChipWrapper
      style={{ opacity: transparent ? 0 : 1 }}
      data-testid="SelectedValueChipWrapper"
    >
      <SelectedValueChipLabel>{label}</SelectedValueChipLabel>
      <SelectedValueChipRemove
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemoveClick();
        }}
      >
        <span className={"selected-value-chip_remove-content"}>x</span>
      </SelectedValueChipRemove>
    </SelectedValueChipWrapper>
  );
};

export default SelectedValueChip;
