import React from 'react';
import { Stack } from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import FaqLeftSide from './FaqLeftSide';
import FaqRightSide from './FaqRightSide';

const FaqSettings: React.FC = () => {
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='FAQ Settings' rootRoute='Settings' secondRoute='FAQ Settings' />

            <Stack direction={'row'} alignItems={'flex-start'}>
                <FaqLeftSide />
                <FaqRightSide />
            </Stack>
        </Stack>
    );
};

export default FaqSettings;
