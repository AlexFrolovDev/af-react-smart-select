import React, { lazy, Suspense } from "react";
import { SmartSelectInputBoxProps } from "./SmartSelectInputBox.types";

const SmartSelectInputBox = lazy(() => import("./SmartSelectInputBox"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    SmartSelectInputBoxProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <SmartSelectInputBox {...props} />
  </Suspense>
);

export default SmartSelect;
