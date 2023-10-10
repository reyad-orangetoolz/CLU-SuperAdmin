import React from 'react';

import Externals from '../components/core/layouts/Externals.tsx';

// ## dashboard app component
const AgencyList = React.lazy(() => import('../components/agencyList/AgencyList.tsx'));

export const agencyListAppRoutes = [
    {
        path: '/agency-list',
        element: (
            <Externals>
                <AgencyList />
            </Externals>
        ),
    },
];
