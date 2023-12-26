import React, { lazy, Suspense } from "react";
import { TemplateNameProps } from "./TemplateName.types";

const TemplateName = lazy(() => import("./TemplateName"));

const SmartSelect = (
  props: JSX.IntrinsicAttributes &
    TemplateNameProps & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <TemplateName {...props} />
  </Suspense>
);

export default SmartSelect;
