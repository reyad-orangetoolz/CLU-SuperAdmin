import React from 'react';
import { Stack } from 'convertupleads-theme';
import DashboardHeader from './Header/DashboardHeader';
import PageVisitCount from './PageVisitCount';
import StatusCardList from './statusCardList/StatusCardList';

const Dashboard: React.FC = () => {
    return (
        <Stack spacing={3} sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }}>
            <DashboardHeader />

            <StatusCardList />

            <PageVisitCount />
        </Stack>
    );
};

export default Dashboard;
