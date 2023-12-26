import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SmartSelectContent, SmartSelectWrapper } from "./SmartSelect.styled";
import { SmartSelectDataType, SmartSelectProps } from "./SmartSelect.types";
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

  const mockData: SmartSelectDataType = useMemo(() => {
    return [
      {
        id: 1,
        label: "Group 1",
        items: new Array(20).fill(null).map((_, idx) => ({
          label: `Option 1_${idx + 1}`,
          value: `option-1_${idx + 1}`,
        })),
      },
      {
        id: 2,
        label: "Group 2",
        items: new Array(20).fill(null).map((_, idx) => ({
          label: `Option 2_${idx + 1}`,
          value: `option-2_${idx + 1}`,
        })),
      },
    ];
  }, []);

  const onContentClick: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    const target = e.target as HTMLDivElement;

    console.log(e.target);

    if (target.classList.contains("smart-select-option_content")) {
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
    const values: string[] = [];

    mockData.forEach((group) => {
      selectedValues.forEach((value) => {
        const item = group.items.find((item) => item.value === value);
        item && values.push(item.label);
      });
    });

    return values;
  }, [selectedValues, mockData]);

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
            data={mockData}
            onChange={onOptionChange}
            open={isOpen}
          />
        </SmartSelectContent>
      </SmartSelectWrapper>
    </ThemeProvider>
  );
};

export default SmartSelect;
