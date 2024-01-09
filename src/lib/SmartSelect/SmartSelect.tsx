import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { SmartSelectContent, SmartSelectWrapper } from "./SmartSelect.styled";
import {
  DataGroup,
  SmartSelectDataItem,
  SmartSelectProps,
} from "./SmartSelect.types";
import SmartSelectDropdown from "./SmartSelectDropdown/SmartSelectDropdown";
import ThemeProvider from "./theme";
import SelectedValuesBox from "./SelectedValuesBox/SelectedValuesBox";

const SmartSelect: FC<SmartSelectProps> = (props: SmartSelectProps) => {
  const {
    data = [],
    placeholder = "Select value(s)",
    multiSelect = false,
    singleLineSelectedValues = true,
    singleLineSelectedValuesScroll = true,
    showDeselectAllButton = false,
    enableSearch = false,
    onChange = () => {},
    onOpen = () => {},
    onClose = () => {},
  } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const isGroupObject = (obj: DataGroup | SmartSelectDataItem) =>
    obj.hasOwnProperty("id") && obj.hasOwnProperty("items");

  const onContentClick: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    const target = e.target as HTMLDivElement;

    e.stopPropagation();

    //console.log(e.target);

    if (target.tagName.toLowerCase() === "input") {
      return;
    }

    if (target.classList.contains("smart-select-option_content")) {
      setIsOpen(multiSelect);
      return;
    }

    setIsOpen((prevValue) => (prevValue ? false : true));
  };

  const onOptionChange = (value: string) => {
    setSelectedValues((prevState: string[]) => {
      if (!multiSelect) {
        return prevState[0] === value ? [] : [value];
      }
      return prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value];
    });
  };

  const onSelectedValueRemoveClick = (indecies: string[]) => {
    //console.log("Removing values: ", indecies, selectedValues);
    setSelectedValues((prevState: string[]) => {
      return prevState.filter((_, idx) => !indecies.includes(idx.toString()));
    });
  };

  const isGroupedData = useMemo(() => {
    return isGroupObject(data[0]);
  }, [data]);

  const selectedLabels = useMemo(() => {
    const values: string[] = [];

    data.forEach((group) => {
      selectedValues.forEach((value) => {
        const item = isGroupedData
          ? group.items!.find((item) => item.value === value)
          : group.value === value
          ? group
          : null;
        item && values.push(item.label);
      });
    });

    return values;
  }, [selectedValues, data, isGroupedData]);

  useEffect(() => {
    setIsOpen(false);
    onChange && onChange(selectedValues);
  }, [selectedValues, onChange]);

  useEffect(() => {
    const _contentRef = contentRef;

    const onDocumentClick = (e: MouseEvent) => {
      if (!_contentRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (!!isOpen) {
      document.addEventListener("click", onDocumentClick, false);
      onOpen && onOpen();
    } else {
      onClose && onClose();
    }

    return () => {
      document.removeEventListener("click", onDocumentClick, false);
    };
  }, [isOpen, onOpen, onClose]);

  return (
    <ThemeProvider>
      <SmartSelectWrapper data-testid="SmartSelect">
        <SmartSelectContent
          ref={contentRef}
          onClick={onContentClick}
          open={isOpen}
        >
          <SelectedValuesBox
            placeholder={placeholder}
            values={selectedLabels}
            multiselect={multiSelect}
            singleLine={singleLineSelectedValues}
            enableScroll={singleLineSelectedValuesScroll}
            showDeselectAllButton={showDeselectAllButton}
            onRemove={onSelectedValueRemoveClick}
          />
          <SmartSelectDropdown
            enableSearch={enableSearch}
            selectedValues={selectedValues}
            data={data}
            onChange={onOptionChange}
            open={isOpen}
          />
        </SmartSelectContent>
      </SmartSelectWrapper>
    </ThemeProvider>
  );
};

export default SmartSelect;
