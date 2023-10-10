import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Stack } from 'convertupleads-theme';
import Sidebar from '../../Sidebar/Sidebar.tsx';
import SettingSidebar from '../../SettingSidebar/SettingSidebar.tsx';

const RootLayout: React.FC = () => {
    const [isSettingsSidebar, setIsSettingsSidebar] = useState(false);
    return (
        <Stack direction={'row'} sx={{ height: '100vh', overflow: 'hidden' }}>
            {/*<Navbar />*/}
            <Sidebar onToggleSettings={setIsSettingsSidebar} />

            {isSettingsSidebar && <SettingSidebar />}

            <Outlet />
        </Stack>
    );
};

export default RootLayout;
