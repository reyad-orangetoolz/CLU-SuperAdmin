import React from 'react';

import Externals from '../components/core/layouts/Externals.tsx';

// ## dashboard app component
const Dashboard = React.lazy(() => import('dashboard/Dashboard'));
const DashboardGraph = React.lazy(() => import('dashboard/DashboardGraph'));

export const dashboardAppRoutes = [
    {
        path: '/dashboard',
        element: (
            <Externals>
                <Dashboard />
            </Externals>
        ),
    },
    {
        path: '/dashboard/graph',
        element: (
            <Externals>
                <DashboardGraph />
            </Externals>
        ),
    },
];
