import styled from "styled-components";

interface OptionWrapper {
  selected?: boolean;
}

export const SmartSelectOptionWrapper = styled.div.attrs({
  className: "smart-select-option_wrapper",
})<OptionWrapper>`
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
`;
