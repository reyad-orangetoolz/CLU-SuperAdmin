import React from 'react';

import Externals from '../components/core/layouts/Externals.tsx';

// ## contact app component
const Contact = React.lazy(() => import('settings/Contact'));
const ContactDetails = React.lazy(() => import('settings/ContactDetails'));
const ContactLogs = React.lazy(() => import('settings/ContactLogs'));

export const contactAppRoutes = [
    {
        path: '/contacts',
        element: (
            <Externals>
                <Contact />
            </Externals>
        ),
    },
    {
        path: '/contact/:id',
        element: (
            <Externals>
                <ContactDetails />
            </Externals>
        ),
    },
    {
        path: '/contact-details',
        element: (
            <Externals>
                <ContactDetails />
            </Externals>
        ),
    },
    {
        path: '/contact-logs',
        element: (
            <Externals>
                <ContactLogs />
            </Externals>
        ),
    },
];
