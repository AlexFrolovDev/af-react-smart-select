import React, { FC } from "react";
import {
  SmartSelectDropdownContent,
  SmartSelectDropdownWrapper,
} from "./SmartSelectDropdown.styled";
import { SmartSelectDropdownProps } from "./SmartSelectDropdown.types";
import SmartSelectOption from "./SmartSelectOption/SmartSelectOption";

const SmartSelectDropdown: FC<SmartSelectDropdownProps> = (props) => {
  const { options, open, selectedValues, isMultiselect, onChange } = props;

  return (
    <SmartSelectDropdownWrapper
      open={open}
      data-testid="SmartSelectDropdownWrapper"
    >
      <SmartSelectDropdownContent>
        {options.map((option, index) => (
          <SmartSelectOption
            selected={selectedValues.includes(option.value)}
            onOptionClick={onChange}
            key={index}
            label={option.label}
            value={option.value}
          />
        ))}
      </SmartSelectDropdownContent>
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;
