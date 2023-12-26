import React, { FC, useMemo } from "react";
import {
  ActionsBox,
  MultiSelectBox,
  PlaceholderBox,
  SelectedValuesBoxWrapper,
} from "./SelectedValuesBox.styled";
import { SelectedValuesBoxProps } from "./SelectedValuesBox.types";
import SelectedValueChip from "./SelectedValueChip/SelectedValueChip";

const SelectedValuesBox: FC<SelectedValuesBoxProps> = (props) => {
  const { values, placeholder, multiselect, onRemove } = props;

  const Chips = useMemo(() => {
    if (values.length === 0) {
      return <PlaceholderBox>{placeholder}</PlaceholderBox>;
    }

    if (multiselect) {
      return <MultiSelectBox>{values.join(", ")}</MultiSelectBox>;
    }

    return values.map((value, idx) => (
      <SelectedValueChip
        key={idx}
        label={value}
        onRemoveClick={() => onRemove && onRemove([idx.toString()])}
      />
    ));
  }, [values, onRemove, multiselect, placeholder]);

  return (
    <SelectedValuesBoxWrapper data-testid="SelectedValuesBoxWrapper">
      {Chips}
      <ActionsBox>
        {values.length > 0 && (
          <span
            style={{ fontWeight: "bold" }}
            onClick={() => onRemove && onRemove(values)}
          >
            &#x2718;
          </span>
        )}
      </ActionsBox>
    </SelectedValuesBoxWrapper>
  );
};

export default SelectedValuesBox;
