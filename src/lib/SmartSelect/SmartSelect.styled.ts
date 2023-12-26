import styled from "styled-components";
import { SmartSelectDropdownWrapper } from "./SmartSelectDropdown/SmartSelectDropdown.styled";

export const SmartSelectWrapper = styled.div.attrs({
  className: "smart-select-wrapper",
})`
  width: 100%;
  overflow-y: visible;
  border: 1px solid ${({ theme }) => theme.layout.borderColor};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
`;

interface ISmartSelectWrapper {
  open?: boolean;
}

export const SmartSelectContent = styled.div.attrs({
  className: "smart-select-content",
})<ISmartSelectWrapper>`
  width: 100%;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.layout.padding};
  cursor: pointer;

  ${SmartSelectDropdownWrapper} {
    ${({ open }) => {
      if (!!open) return { display: "none" };
    }}
  }
`;
