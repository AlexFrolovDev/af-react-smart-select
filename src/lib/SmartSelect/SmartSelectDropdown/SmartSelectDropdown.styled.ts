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
  margin-top: initial;
  box-shadow: 0px 10px 30px -20px black;
  box-sizing: border-box;
  width: calc(100% - 0px);
  left: 0px;
  position: absolute;
  top: initial;
  bottom: ${({ theme }) => `calc(-${theme.layout.dropdown.maxHeight} - 10px)`};

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => `calc(${theme.layout.padding})`};
  padding-top: ${({ theme }) => `calc(${theme.layout.padding})`};
  padding-bottom: ${({ theme }) => `calc(${theme.layout.padding})`};

  &.position-top {
    bottom: initial;
    top: ${({ theme }) => `calc(-${theme.layout.dropdown.maxHeight} - 10px)`};
  }
`;

interface ISmartSelectDropdownContent {
  open?: boolean;
}

export const SmartSelectDropdownContent = styled.div.attrs({
  className: "samart-select-dropdown_content",
})<ISmartSelectDropdownContent>`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
