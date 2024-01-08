import React, { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import {
  SmartSelectDropdownContent,
  SmartSelectDropdownWrapper,
} from "./SmartSelectDropdown.styled";
import { SmartSelectDropdownProps } from "./SmartSelectDropdown.types";
import SmartSelectOption from "./SmartSelectOption/SmartSelectOption";
import OptionSeparator from "./OptionSeparator/OptionSeparator";

const SmartSelectDropdown: FC<SmartSelectDropdownProps> = (props) => {
  const {
    data,
    open,
    selectedValues,
    positionAutoDetect = true,
    onChange,
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const theme = useTheme();
  const maxHeight = parseInt(theme?.layout?.dropdown?.maxHeight);

  useEffect(() => {
    if (open && wrapperRef.current && positionAutoDetect) {
      const bodyHeight = window.innerHeight;
      const rect = wrapperRef.current.getBoundingClientRect();

      setIsOverflow(rect.top + Math.min(maxHeight, rect.height) > bodyHeight);
    } else {
      setIsOverflow(false);
    }

    return () => {};
  }, [open]);

  return (
    <SmartSelectDropdownWrapper
      className={`${isOverflow ? "position-top" : ""}`}
      ref={wrapperRef}
      open={open}
      data-testid="SmartSelectDropdownWrapper"
    >
      {open && (
        <SmartSelectDropdownContent>
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
      )}
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;
