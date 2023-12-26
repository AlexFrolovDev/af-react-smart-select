import React, { lazy, Suspense } from "react";
import { OptionSeparatorProps } from "./OptionSeparator.types";

const OptionSeparator = lazy(() => import("./OptionSeparator"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    OptionSeparatorProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <OptionSeparator {...props} />
  </Suspense>
);

export default SmartSelect;
