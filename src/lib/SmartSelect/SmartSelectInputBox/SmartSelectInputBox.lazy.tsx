import React, { lazy, Suspense } from 'react';

const LazySmartSelectInputBox = lazy(() => import('./SmartSelectInputBox'));

const SmartSelectInputBox = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySmartSelectInputBox {...props} />
  </Suspense>
);

export default SmartSelectInputBox;
