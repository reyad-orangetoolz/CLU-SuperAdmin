import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/core/layouts/RootLayout.tsx';
import { setCookie } from './helpers/Cookie.ts';
import { CssBaseline } from 'convertupleads-theme';
import { settingsAppRoutes } from './routes/settingsAppRoutes.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            ...settingsAppRoutes,
            // ...parentAppRoutes,
            // ...dashboardAppRoutes,
            // ...contactAppRoutes,
            // ...inboxAppRoutes,
            {
                path: '/*',
                element: <p>No Page Found!!</p>,
            },
        ],
    },
]);

function App() {
    console.log(import.meta.env.VITE_PRODUCTION_MODE);

    if (import.meta.env.VITE_PRODUCTION_MODE !== 'true') {
        // TODO set api access token in cookie for tests
        const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
        if (!accessToken) throw Error('Access token not found in env!');
        setCookie(accessToken, 'QW4RFEW1G1HRE1HH1E', import.meta.env.VITE_ACCESS_TOKEN_VALIDITY || '1 hour');
    }

    return (
        <>
            <CssBaseline />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
