import React, { lazy, Suspense } from "react";
import { SmartSelectProps } from "./SmartSelect.types";

const LazySmartSelect = lazy(() => import("./SmartSelect"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    SmartSelectProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazySmartSelect {...props} />
  </Suspense>
);

export default SmartSelect;
