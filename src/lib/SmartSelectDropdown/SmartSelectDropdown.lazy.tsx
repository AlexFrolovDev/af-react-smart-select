import React, { lazy, Suspense } from 'react';

const LazySmartSelectDropdown = lazy(() => import('./SmartSelectDropdown'));

const SmartSelectDropdown = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySmartSelectDropdown {...props} />
  </Suspense>
);

export default SmartSelectDropdown;
