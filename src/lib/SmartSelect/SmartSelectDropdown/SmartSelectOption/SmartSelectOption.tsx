import React, { FC, forwardRef, useEffect, useRef } from "react";
import {
  SmartSelectOptionContent,
  SmartSelectOptionLabel,
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
        <SmartSelectOptionWrapper ref={ref} selected={selected}>
          <SmartSelectOptionContent>
            <SmartSelectOptionLabel>{label}</SmartSelectOptionLabel>
            {selected ? <span>&#x2714;</span> : null}
          </SmartSelectOptionContent>
        </SmartSelectOptionWrapper>
      );
    }
  )
);

export default SmartSelectOption;
