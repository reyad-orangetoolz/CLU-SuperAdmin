import React from 'react';

import Externals from '../components/core/layouts/Externals.tsx';

// ## contact app component
const Inbox = React.lazy(() => import('settings/Inbox'));

export const inboxAppRoutes = [
    {
        path: '/inbox',
        element: (
            <Externals>
                <Inbox />
            </Externals>
        ),
    },
];
