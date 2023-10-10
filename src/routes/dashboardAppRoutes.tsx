import React from 'react';

import Externals from '../components/core/layouts/Externals.tsx';
// import Dashboard from '../components/dashboard/Dashboard.tsx';

// ## dashboard app component
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard.tsx'));
const DashboardGraph = React.lazy(() => import('dashboard/DashboardGraph'));

export const dashboardAppRoutes = [
    {
        path: '/',
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
