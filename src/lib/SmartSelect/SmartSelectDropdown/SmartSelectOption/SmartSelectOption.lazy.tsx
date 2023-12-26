import React, { lazy, Suspense } from "react";
import { SmartSelectOptionProps } from "./SmartSelectOption.types";

const SmartSelectOption = lazy(() => import("./SmartSelectOption"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    SmartSelectOptionProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <SmartSelectOption {...props} />
  </Suspense>
);

export default SmartSelect;
