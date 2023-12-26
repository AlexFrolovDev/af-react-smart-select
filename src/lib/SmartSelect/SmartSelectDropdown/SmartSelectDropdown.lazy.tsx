import React, { lazy, Suspense } from "react";
import { SmartSelectDropdownProps } from "./SmartSelectDropdown.types";

const SmartSelectDropdown = lazy(() => import("./SmartSelectDropdown"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    SmartSelectDropdownProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <SmartSelectDropdown {...props} />
  </Suspense>
);

export default SmartSelect;
