import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
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
  const [showOnTop, setShowOnTop] = useState(false);
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

  useLayoutEffect(() => {
    if (open && wrapperRef.current && positionAutoDetect) {
      const windowHeight = window.innerHeight;
      const rect = wrapperRef.current.getBoundingClientRect();
      let hasBottomSpace = rect.top + rect.height < windowHeight;
      let hasTopSpace = rect.top > 0;

      setShowOnTop(hasBottomSpace ? false : hasTopSpace);
      setSearchValue("");
    } else {
      setShowOnTop(false);
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
      className={`${showOnTop ? "position-top" : ""}`}
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
          <SimpleBar
            style={{
              maxHeight:
                maxHeight -
                (searchBoxRef.current?.getBoundingClientRect().height || 0),
            }}
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
          </SimpleBar>
        </SmartSelectDropdownContent>
      )}
    </SmartSelectDropdownWrapper>
  );
};

export default SmartSelectDropdown;
