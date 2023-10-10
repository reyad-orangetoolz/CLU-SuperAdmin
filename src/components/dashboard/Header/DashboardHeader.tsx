import React from 'react';
import { Stack } from 'convertupleads-theme';
import WelcomeUser from './WelcomeUser';
import CommonStatus from './CommonStatus';

const DashboardHeader: React.FC = () => {
    return (
        <Stack spacing={4} sx={{ bgcolor: 'common.white', p: 3, borderRadius: '12.5px' }}>
            <WelcomeUser />
            <CommonStatus />
        </Stack>
    );
};

export default DashboardHeader;
