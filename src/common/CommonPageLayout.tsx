import React from 'react';
import { Box, Paper, Stack } from 'convertupleads-theme';
import TopNav from './topNav/TopNav.tsx';

interface PageLayoutInterface {
    title: string;
    currenRoute?: string;
    secondRoute?: string;
    children: React.ReactNode;
    rootRoute?: string;
}

const CommonPageLayout: React.FC<PageLayoutInterface> = ({ title, rootRoute, currenRoute, secondRoute, children }) => {
    return (
        <Stack spacing={2} sx={{ height: '100%' }}>
            <TopNav title={title} currenRoute={currenRoute} secondRoute={secondRoute} rootRoute={rootRoute} />
            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <Box sx={{ height: '100%' }}>{children}</Box>
            </Paper>
        </Stack>
    );
};

export default CommonPageLayout;
