import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../fallback/ErrorFallback.tsx';
import LoadingFallback from '../fallback/LoadingFallback.tsx';

interface IProps {
    children: React.ReactNode;
}
const Externals: React.FC<IProps> = ({ children }) => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>
        </Suspense>
    );
};

export default Externals;
