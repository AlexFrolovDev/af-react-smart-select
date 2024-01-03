import styled from "styled-components";

interface OptionWrapper {
  selected?: boolean;
}

export const SmartSelectOptionWrapper = styled.div.attrs({
  className: "smart-select-option_wrapper",
})<OptionWrapper>`
  margin-bottom: ${({theme}) => theme.layout.dropdown.optionMarginBottom};
  box-sizing: border-box;
  /* background: ${({ selected, theme }) =>
    selected ? theme.colors.darkGrey3 : "white"}; */
  font-weight: ${({ selected, theme }) =>
    selected
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightMedium};
  border-radius: ${({ theme }) => theme.layout.borderRadius};

  ${({ selected, theme }) => {
    if (selected) {
      return `
            color: ${theme.colors.white};
            background: ${theme.colors.darkGrey3};
        `;
    }
    return `
        color: ${theme.colors.black};
        background: white;
        &:hover {
            background: ${theme.colors.grey};
            font-weight: bold;
          }
    `;
  }}
`;

export const SmartSelectOptionContent = styled.div.attrs({
  className: "smart-select-option_content",
})`
  padding: ${({ theme }) => theme.layout.padding};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SmartSelectOptionLabel = styled.div.attrs({
  className: "smart-select-option_label",
})``;

export const SmartSelectOptionCheckbox = styled.input.attrs({
  className: "smart-select-option_checkbox",
  type: "checkbox",
})`
  cursor: pointer;
`;

export const SmartSelectOptionCheckmark = styled.span.attrs({
  className: "smart-select-option_checkmark",
})`
  display: inline-block;
  width: 1em;
  height: 1em;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);

  & > .stem {
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: white;
    left: 11px;
    top: 0;
  }

  & > .kick {
    position: absolute;
    width: 25%;
    height: 3px;
    background-color: white;
    left: 7px;
    top: calc(100% - 3px);
  }
`;
