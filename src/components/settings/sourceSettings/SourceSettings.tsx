import React from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import AddNewFollowup from './drawer/AddNewFollowup';
import SourceSettingsTable from './SourceSettingsTable';
import SourceSettingsFilter from './SourceSettingsFilter';

const SourceSettings: React.FC = () => {
    const [addDrawer, setAddDrawer] = React.useState(false);

    const handleAddDrawer = () => {
        setAddDrawer((prevState) => !prevState);
    };
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Source Settings' rootRoute='Settings' secondRoute='Source Settings'>
                <Button onClick={handleAddDrawer} startIcon={<AddIcon />}>
                    Create New Title
                </Button>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <SourceSettingsFilter />
                <SourceSettingsTable />
            </Paper>

            <AddNewFollowup open={addDrawer} onClose={handleAddDrawer} />
        </Stack>
    );
};

export default SourceSettings;
