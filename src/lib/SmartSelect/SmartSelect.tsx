import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SmartSelectContent, SmartSelectWrapper } from "./SmartSelect.styled";
import { SmartSelectProps } from "./SmartSelect.types";
import SmartSelectInputBox from "./SmartSelectInputBox/SmartSelectInputBox";
import SmartSelectDropdown from "./SmartSelectDropdown/SmartSelectDropdown";
import ThemeProvider from "./theme";
import { SmartSelectOptionType } from "./SmartSelectDropdown/SmartSelectOption/SmartSelectOption.types";

const SmartSelect: FC<SmartSelectProps> = (props: SmartSelectProps) => {
  const { multiSelect } = props;
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const options: SmartSelectOptionType[] = new Array(50)
    .fill(null)
    .map((_, idx) => ({
      label: `Option ${idx + 1}`,
      value: `option-${idx + 1}`,
    }));

  const onContentClick: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    const target = e.target as HTMLDivElement;

    if (target.classList.contains("smart-select-option-content")) {
      setIsOpen(false);
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

  const selectedLabels = useMemo(() => {
    return selectedValues.map(
      (value) => options.find((option) => option.value === value)?.label
    );
  }, [selectedValues, options]);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedValues]);

  useEffect(() => {
    const _contentRef = contentRef;

    const onDocumentClick = (e: MouseEvent) => {
      if (!_contentRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (!!isOpen) {
      document.addEventListener("click", onDocumentClick, false);
    }

    return () => {
      document.removeEventListener("click", onDocumentClick, false);
    };
  }, [isOpen]);

  return (
    <ThemeProvider>
      <SmartSelectWrapper data-testid="SmartSelect">
        <SmartSelectContent
          ref={contentRef}
          onClick={onContentClick}
          open={isOpen}
        >
          <SmartSelectInputBox
            text={selectedLabels.join(", ")}
            placeholder="Select at least 1 value"
            onChange={() => {}}
          />
          <SmartSelectDropdown
            isMultiselect={!!multiSelect}
            selectedValues={selectedValues}
            options={options}
            onChange={onOptionChange}
            open={isOpen}
          />
        </SmartSelectContent>
      </SmartSelectWrapper>
    </ThemeProvider>
  );
};

export default SmartSelect;
