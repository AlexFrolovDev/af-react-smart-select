import React, { FC, useEffect, useRef, useState } from "react";
import { SmartSelectContent, SmartSelectWrapper } from "./SmartSelect.styled";
import { SmartSelectProps } from "./SmartSelect.types";
import SmartSelectInputBox from "./SmartSelectInputBox/SmartSelectInputBox";
import SmartSelectDropdown from "./SmartSelectDropdown/SmartSelectDropdown";
import ThemeProvider from "./theme";

const SmartSelect: FC<SmartSelectProps> = (props: SmartSelectProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onContentClick = () => {
    setIsOpen(true);
  };

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
          <SmartSelectInputBox />
          <SmartSelectDropdown />
        </SmartSelectContent>
      </SmartSelectWrapper>
    </ThemeProvider>
  );
};

export default SmartSelect;
