import React, { lazy, Suspense } from 'react';

const LazySmartSelect = lazy(() => import('./SmartSelect'));

const SmartSelect = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySmartSelect {...props} />
  </Suspense>
);

export default SmartSelect;
