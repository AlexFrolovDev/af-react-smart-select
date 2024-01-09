import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { useTheme } from "styled-components";
import {
  SearchBoxWrapper,
  SmartSelectDropdownContent,
  SmartSelectDropdownWrapper,
} from "./SmartSelectDropdown.styled";
import { SmartSelectDropdownProps } from "./SmartSelectDropdown.types";
import SmartSelectOption from "./SmartSelectOption/SmartSelectOption";
import OptionSeparator from "./OptionSeparator/OptionSeparator";
import { DataGroup, SmartSelectDataItem } from "../SmartSelect.types";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();
  const maxHeight = parseInt(theme?.layout?.dropdown?.maxHeight);

  const isGroupObject = (obj: DataGroup | SmartSelectDataItem) =>
    obj.hasOwnProperty("id") && obj.hasOwnProperty("items");

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
  }, [open, maxHeight, positionAutoDetect]);

  useEffect(() => {}, [searchValue]);

  const isGroupedData = useMemo(() => {
    return isGroupObject(data[0]);
  }, [data]);

  const filteredData = useMemo(() => {
    if (isGroupedData) {
      return (data as DataGroup[])
        .map((group) => {
          return {
            ...(group as DataGroup),
            items: group.items
              ? group.items.filter((item) =>
                  item.label.toLowerCase().includes(searchValue.toLowerCase())
                )
              : [],
          };
        })
        .filter((group) => group.items.length > 0);
    } else {
      return (data as SmartSelectDataItem[]).filter(
        (item: SmartSelectDataItem) =>
          item.label?.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }, [data, searchValue, isGroupedData]);

  return (
    <SmartSelectDropdownWrapper
      className={`${isOverflow ? "position-top" : ""}`}
      ref={wrapperRef}
      open={open}
      data-testid="SmartSelectDropdownWrapper"
    >
      {enableSearch && (
        <SearchBoxWrapper ref={searchBoxRef}>
          <input type="text" value={searchValue} onChange={onSearchChange} />
        </SearchBoxWrapper>
      )}
      {open && (
        <SmartSelectDropdownContent ref={contentRef}>
          <Scrollbar
            style={{
              width: contentRef.current?.getBoundingClientRect().width,
              height:
                maxHeight -
                (searchBoxRef.current?.getBoundingClientRect().height || 0),
            }}
            noScrollX
          >
            {filteredData.map((group: DataGroup | SmartSelectDataItem) => {
              return (
                <div key={isGroupedData ? group.id : group.value}>
                  {isGroupedData && (
                    <OptionSeparator key={`group-id-${group.id}`}>
                      {group.label}
                    </OptionSeparator>
                  )}
                  {isGroupedData ? (
                    group.items?.map((item: SmartSelectDataItem) => {
                      return (
                        <SmartSelectOption
                          selected={selectedValues.includes(
                            item.value.toString()
                          )}
                          onOptionClick={onChange}
                          key={group.id + "" + item.value}
                          label={item.label}
                          value={item.value.toString()}
                        />
                      );
                    })
                  ) : (
                    <SmartSelectOption
                      selected={selectedValues.includes(
                        group.value!.toString()
                      )}
                      onOptionClick={onChange}
                      key={group.id + "" + group.value}
                      label={group.label!}
                      value={group.value!.toString()}
                    />
                  )}
                </div>
              );
            })}
          </Scrollbar>
        </SmartSelectDropdownContent>
      )}
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;
