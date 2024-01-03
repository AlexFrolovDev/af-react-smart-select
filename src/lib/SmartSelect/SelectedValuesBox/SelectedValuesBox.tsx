import React, { FC, useMemo } from "react";
import {
  ActionsBox,
  ChipsWrapper,
  PlaceholderBox,
  SelectedSingleValue,
  SelectedValuesBoxWrapper,
} from "./SelectedValuesBox.styled";
import { SelectedValuesBoxProps } from "./SelectedValuesBox.types";
import SelectedValueChip from "./SelectedValueChip/SelectedValueChip";

const SelectedValuesBox: FC<SelectedValuesBoxProps> = (props) => {
  const {
    values,
    placeholder,
    multiselect,
    singleLine,
    showDeselectAllButton,
    onRemove,
  } = props;

  const Chips = useMemo(() => {
    if (values.length === 0) {
      return <PlaceholderBox>{placeholder}</PlaceholderBox>;
    }

    if (!multiselect && values.length === 1) {
      return <SelectedSingleValue>{values[0]}</SelectedSingleValue>;
    }

    return values.map((value, idx) => (
      <SelectedValueChip
        key={idx}
        label={value}
        onRemoveClick={() => onRemove && onRemove([idx.toString()])}
      />
    ));
  }, [values, onRemove, multiselect, placeholder]);

  const onRemoveAllClick = () => {
    if (!onRemove) return;
    const indecies = values.map((value, idx) => idx.toString());
    onRemove(indecies);
  };

  return (
    <SelectedValuesBoxWrapper data-testid="SelectedValuesBoxWrapper">
      <ChipsWrapper
        title={values.join(",")}
        className={`${singleLine && "single-line "}`}
      >
        {Chips}
      </ChipsWrapper>
      <ActionsBox>
        {values.length > 0 && showDeselectAllButton && (
          <span style={{ fontWeight: "bold" }} onClick={onRemoveAllClick}>
            &#x2718;
          </span>
        )}
      </ActionsBox>
    </SelectedValuesBoxWrapper>
  );
};

export default SelectedValuesBox;
