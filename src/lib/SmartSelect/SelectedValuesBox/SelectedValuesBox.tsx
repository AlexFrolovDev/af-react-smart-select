import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Scrollbar } from "react-scrollbars-custom";
import {
  ActionsBox,
  ChipsWrapper,
  PlaceholderBox,
  SelectedSingleValue,
  SelectedValuesBoxWrapper,
} from "./SelectedValuesBox.styled";
import { SelectedValuesBoxProps } from "./SelectedValuesBox.types";
import SelectedValueChip from "./SelectedValueChip/SelectedValueChip";

const SelectedValuesBox: FC<SelectedValuesBoxProps> = (props) => {
  const {
    values,
    placeholder,
    multiselect,
    singleLine,
    enableScroll,
    showDeselectAllButton,
    onRemove,
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const initialChipsHeight = useRef<number>(0);

  const DefaultChipsWrapper: FC<PropsWithChildren> = ({ children }) => (
    <ChipsWrapper
      title={values.join(",")}
      className={`${singleLine ? "single-line " : " "}${
        enableScroll ? "scroll-enabled " : " "
      }`}
    >
      {children}
    </ChipsWrapper>
  );

  const ChipsWrapperWithScroll: FC<PropsWithChildren> = ({ children }) => (
    <Scrollbar
      style={{
        width: wrapperRef.current?.getBoundingClientRect().width,
        height: initialChipsHeight.current,
      }}
      noScrollY
    >
      <ChipsWrapper
      title={values.join(",")}
      className={`${singleLine ? "single-line " : " "}${
        enableScroll ? "scroll-enabled " : " "
      }`}
    >{children}</ChipsWrapper>
    </Scrollbar>
  );

  const Chips = useMemo(() => {
    if (values.length === 0) {
      return <PlaceholderBox>{placeholder}</PlaceholderBox>;
    }

    if (!multiselect && values.length === 1) {
      return (
        <DefaultChipsWrapper>
          <SelectedSingleValue>{values[0]}</SelectedSingleValue>
        </DefaultChipsWrapper>
      );
    }

    if (multiselect && values.length > 0 && singleLine && enableScroll) {
      return (
        <ChipsWrapperWithScroll>
          {values.map((value, idx) => (
            <SelectedValueChip
              key={idx}
              label={value}
              onRemoveClick={() => onRemove && onRemove([idx.toString()])}
            />
          ))}
        </ChipsWrapperWithScroll>
      );
    }

    console.log(props);

    return (
      <DefaultChipsWrapper>
        {values.map((value, idx) => (
          <SelectedValueChip
            key={idx}
            label={value}
            onRemoveClick={() => onRemove && onRemove([idx.toString()])}
          />
        ))}
      </DefaultChipsWrapper>
    );
  }, [
    values,
    onRemove,
    multiselect,
    placeholder,
    enableScroll,
    singleLine,
    ChipsWrapperWithScroll,
    DefaultChipsWrapper,
  ]);

  const onRemoveAllClick = () => {
    if (!onRemove) return;
    const indecies = values.map((value, idx) => idx.toString());
    onRemove(indecies);
  };

  useEffect(() => {
    initialChipsHeight.current = wrapperRef.current?.clientHeight || 0;
  }, []);

  return (
    <SelectedValuesBoxWrapper
      ref={wrapperRef}
      data-testid="SelectedValuesBoxWrapper"
    >
      {Chips}
      <ActionsBox>
        {values.length > 0 && showDeselectAllButton && (
          <span style={{ fontWeight: "bold" }} onClick={onRemoveAllClick}>
            &#x2718;
          </span>
        )}
      </ActionsBox>
    </SelectedValuesBoxWrapper>
  );
};

export default SelectedValuesBox;
