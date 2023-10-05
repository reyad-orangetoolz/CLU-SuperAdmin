import React from 'react';
import { Paper, Stack } from 'convertupleads-theme';
import CodeSnapSettingsFilter from './CodeSnapSettingsFilter';
import CodeSnapSettingsTable from './CodeSnapSettingsTable';
import AddNewFollowup from './drawer/AddNewFollowup';
import TopNav from '../../../common/topNav/TopNav';

const CodeSnapSettings: React.FC = () => {
    const [addDrawer, setAddDrawer] = React.useState(false);

    const handleAddDrawer = () => {
        setAddDrawer((prevState) => !prevState);
    };
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Pending Code Snap Approval' rootRoute='Settings' secondRoute='Code Snap' />

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <CodeSnapSettingsFilter />
                <CodeSnapSettingsTable />
            </Paper>

            <AddNewFollowup open={addDrawer} onClose={handleAddDrawer} />
        </Stack>
    );
};

export default CodeSnapSettings;
