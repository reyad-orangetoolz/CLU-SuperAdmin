import Externals from '../components/core/layouts/Externals.tsx';
import PublicPage from '../components/Public/PublicPage.tsx';

export const parentAppRoutes = [
    {
        path: '/',
        element: (
            <Externals>
                <PublicPage />
            </Externals>
        ),
    },
];
