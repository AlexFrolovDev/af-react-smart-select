import React, { FC } from "react";
import {
  SmartSelectDropdownContent,
  SmartSelectDropdownWrapper,
} from "./SmartSelectDropdown.styled";
import { SmartSelectDropdownProps } from "./SmartSelectDropdown.types";
import SmartSelectOption from "./SmartSelectOption/SmartSelectOption";
import OptionSeparator from "./OptionSeparator/OptionSeparator";

const SmartSelectDropdown: FC<SmartSelectDropdownProps> = (props) => {
  const { data, open, selectedValues, isMultiselect, onChange } = props;

  return (
    <SmartSelectDropdownWrapper
      open={open}
      data-testid="SmartSelectDropdownWrapper"
    >
      <SmartSelectDropdownContent>
        {/* {options.map((option, index) => (
          <SmartSelectOption
            selected={selectedValues.includes(option.value)}
            onOptionClick={onChange}
            key={index}
            label={option.label}
            value={option.value}
          />
        ))} */}
        {data.map((group) => {
          return (
            <>
              {group.label && (
                <OptionSeparator key={`group-id-${group.id}`}>
                  {group.label}
                </OptionSeparator>
              )}
              {group.items.map((item) => {
                return (
                  <SmartSelectOption
                    selected={selectedValues.includes(item.value.toString())}
                    onOptionClick={onChange}
                    key={group.id + "" + item.value}
                    label={item.label}
                    value={item.value.toString()}
                  />
                );
              })}
            </>
          );
        })}
      </SmartSelectDropdownContent>
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;
