import styled from "styled-components";

interface ISmartSelectDropdownWrapper {
  open?: boolean;
}

export const SmartSelectDropdownWrapper = styled.div.attrs({
  className: "samart-select-dropdown-wrapper",
})<ISmartSelectDropdownWrapper>`
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  display: ${({ open }) => (open ? "block" : "none")};
  max-height: ${({ theme }) => theme.layout.dropdown.maxHeight};
  margin-top: ${({ theme }) => `calc(${theme.layout.padding} * 2)`};
`;

interface ISmartSelectDropdownContent {
  open?: boolean;
}

export const SmartSelectDropdownContent = styled.div.attrs({
  className: "samart-select-dropdown-content",
})<ISmartSelectDropdownContent>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
