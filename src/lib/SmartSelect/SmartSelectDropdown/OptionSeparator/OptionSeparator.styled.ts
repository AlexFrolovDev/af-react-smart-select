import styled from "styled-components";

export const OptionSeparatorWrapper = styled.div.attrs({
  className: "smart-select__option-separator_wrapper",
})`
  position: relative;
  opacity: 0.7;
  cursor: default;
`;

export const OptionSeparatorLabel = styled.div.attrs({
  className: "smart-select__option-separator_label",
})`
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  margin-left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  background: white;
  padding: 0 0.5em;
  vertical-align: middle;
  font-size: smaller;
`;

export const OptionSeparatorStrike = styled.div.attrs({
  className: "smart-select__option-separator_strike",
})`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkGrey2};
  position: absolute;
  left: 0;
  top: 50%;
  opacity: 0.125;
`;
