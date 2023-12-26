import React, { lazy, Suspense } from "react";
import { SelectedValueChipProps } from "./SelectedValueChip.types";

const SelectedValueChip = lazy(() => import("./SelectedValueChip"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    SelectedValueChipProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <SelectedValueChip {...props} />
  </Suspense>
);

export default SmartSelect;
