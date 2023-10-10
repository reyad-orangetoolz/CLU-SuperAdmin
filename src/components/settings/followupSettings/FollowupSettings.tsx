import React from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import FollowupSettingsFilter from './FollowupSettingsFilter';
import FollowupSettingsTable from './FollowupSettingsTable';
import TopNav from '../../../common/topNav/TopNav';
import AddNewFollowup from './drawer/AddNewFollowup';

const FollowupSettings: React.FC = () => {
    const [addDrawer, setAddDrawer] = React.useState(false);

    const handleAddDrawer = () => {
        setAddDrawer((prevState) => !prevState);
    };
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Followup Settings' rootRoute='Settings' secondRoute='Followup Settings'>
                <Button onClick={handleAddDrawer} startIcon={<AddIcon />}>
                    Create New followup
                </Button>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <FollowupSettingsFilter />
                <FollowupSettingsTable />
            </Paper>

            <AddNewFollowup open={addDrawer} onClose={handleAddDrawer} />
        </Stack>
    );
};

export default FollowupSettings;
