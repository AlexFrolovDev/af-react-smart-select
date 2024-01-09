import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import {
  SearchBoxWrapper,
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
    enableSearch = false,
    onChange,
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const maxHeight = parseInt(theme?.layout?.dropdown?.maxHeight);

  const onSearchChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (open && wrapperRef.current && positionAutoDetect) {
      const windowHeight = window.innerHeight;
      const rect = wrapperRef.current.getBoundingClientRect();

      setIsOverflow(rect.top + Math.min(maxHeight, rect.height) > windowHeight);
      setSearchValue("");
    } else {
      setIsOverflow(false);
    }

    return () => {};
  }, [open]);

  useEffect(() => {}, [searchValue]);

  const filteredData = useMemo(() => {
    const filtered = data
      .map((group) => {
        return {
          ...group,
          items: group.items.filter((item) =>
            item.label.toLowerCase().includes(searchValue.toLowerCase())
          ),
        };
      })
      .filter((group) => group.items.length > 0);

    return filtered;
  }, [data, searchValue]);

  return (
    <SmartSelectDropdownWrapper
      className={`${isOverflow ? "position-top" : ""}`}
      ref={wrapperRef}
      open={open}
      data-testid="SmartSelectDropdownWrapper"
    >
      {enableSearch && (
        <SearchBoxWrapper>
          <input type="text" value={searchValue} onChange={onSearchChange} />
        </SearchBoxWrapper>
      )}
      {open && (
        <SmartSelectDropdownContent>
          {filteredData.map((group) => {
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
