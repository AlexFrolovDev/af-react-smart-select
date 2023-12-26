import React, {
  FC,
  ForwardRefExoticComponent,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import {
  SmartSelectOptionContent,
  SmartSelectOptionWrapper,
} from "./SmartSelectOption.styled";
import { SmartSelectOptionProps } from "./SmartSelectOption.types";

const SmartSelectOption: FC<SmartSelectOptionProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { value, label, selected, onOptionClick } = props;

  useEffect(() => {
    const onClick = () => {
      onOptionClick(value);
    };
    const _ref = ref.current;

    _ref?.addEventListener("click", onClick);

    return () => {
      _ref?.removeEventListener("click", onClick);
    };
  }, [onOptionClick, label, value]);

  return (
    <PureOptionComponent
      label={label}
      value={value}
      selected={selected}
      ref={ref}
    />
  );
};

const PureOptionComponent = React.memo(
  forwardRef(
    (
      props: Omit<SmartSelectOptionProps, "onOptionClick">,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      const { label, selected } = props;

      return (
        <SmartSelectOptionWrapper ref={ref} selected={props.selected}>
          <SmartSelectOptionContent>{label}</SmartSelectOptionContent>
        </SmartSelectOptionWrapper>
      );
    }
  )
);

export default SmartSelectOption;
