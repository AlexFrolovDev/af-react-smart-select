import React, { lazy, Suspense } from "react";
import { SelectedValuesBoxProps } from "./SelectedValuesBox.types";

const SelectedValuesBox = lazy(() => import("./SelectedValuesBox"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    SelectedValuesBoxProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <SelectedValuesBox {...props} />
  </Suspense>
);

export default SmartSelect;
