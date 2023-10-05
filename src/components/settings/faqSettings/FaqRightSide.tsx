import React from 'react';
import { Divider, Paper } from 'convertupleads-theme';
import FaqSettingsFilter from './FaqSettingsFilter';
import FaqRightSideHeader from './faqRightSide/FaqRightSideHeader';

const FaqRightSide: React.FC = () => {
    return (
        <Paper elevation={0} sx={{ flex: 1, borderRadius: 0 }}>
            <FaqRightSideHeader />
            <Divider light />

            <FaqSettingsFilter />
        </Paper>
    );
};

export default FaqRightSide;
