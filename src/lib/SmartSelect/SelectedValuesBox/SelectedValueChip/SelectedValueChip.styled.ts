import styled from "styled-components";

interface WrapperProps {
  
}
export const SelectedValueChipWrapper = styled.div.attrs({
  className: "selected-value-chip_wrapper",
})<WrapperProps>`
  display: inline-block;
  position: relative;
  background-color: ${(props) => props.theme.colors.white2};
  padding: ${({ theme }) => theme.layout.padding};
  padding-top: 0;
  padding-bottom: 4px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding-right: 0;
  cursor: default;
`;

export const SelectedValueChipLabel = styled.span.attrs({
  className: "selected-value-chip_label",
})`
  font-size: small;
  margin-right: ${({ theme }) => theme.layout.padding};
`;

export const SelectedValueChipRemove = styled.div.attrs({
  className: "selected-value-chip_remove",
})`
  display: inline-block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  position: relative;

  &:hover {
    cursor: pointer;
    & > span {
      font-weight: bold;
    }
  }

  & > span {
    position: absolute;
    font-size: 0.7em;
    line-height: 0.7em;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
