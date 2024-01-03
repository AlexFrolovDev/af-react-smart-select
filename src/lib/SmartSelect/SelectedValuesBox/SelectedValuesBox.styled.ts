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

export const MultiSelectBox = styled.div.attrs({
  className: "multi-select-box",
})`
  font-size: 0.75em;
  padding-bottom: 4px;
`;

type ChipsWrapperProps = {
  className?: string;
  singleLine?: boolean;
};

export const ChipsWrapper = styled.div.attrs({
  className: "chips-wrapper",
})<ChipsWrapperProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.layout.gap};
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;

  &.single-line {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;

    & > div {
      margin-right: ${({ theme }) => theme.layout.gap};
    }
  }
`;

export const SelectedSingleValue = styled.div.attrs({
  className: "selected-single-value",
})`
  padding-bottom: 4px;
`;
