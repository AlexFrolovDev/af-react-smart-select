import React, { lazy, Suspense } from 'react';

const LazySmartSelectOption = lazy(() => import('./SmartSelectOption'));

const SmartSelectOption = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySmartSelectOption {...props} />
  </Suspense>
);

export default SmartSelectOption;
