import styled from "styled-components";

export const SelectedValuesBoxWrapper = styled.div.attrs({
  className: "selected-values-box_wrapper",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActionsBox = styled.div.attrs({
  className: "actions-box",
})``;

export const PlaceholderBox = styled.span.attrs({
  className: "placeholder-box",
})`
  padding-bottom: 4px;
`;

export const MultiSelectBox = styled(PlaceholderBox).attrs({
  className: "multi-select-box",
})`
  font-size: 0.75em;
`;
