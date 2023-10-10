import { useState } from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import SystemNotificationsFilter from './SystemNotificationsFilter';
import SystemNotificationsTable from './SystemNotificationsTable';
import AddNewSystemAlertDrawer from './drawer/AddNewSystemAlertDrawer';

const SystemNotificationsSettings = () => {
    const [drawer, setDrawer] = useState(false);

    const handleDrawer = () => {
        setDrawer((prevState) => !prevState);
    };
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='System Notifications' rootRoute='Settings' secondRoute='System Notifications'>
                <Stack direction={'row'} spacing={1}>
                    <Button variant='outlined' onClick={handleDrawer} startIcon={<AddIcon />}>
                        Create New System Alert
                    </Button>

                    <Button onClick={handleDrawer} startIcon={<AddIcon />}>
                        Add New System Alert
                    </Button>
                </Stack>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <SystemNotificationsFilter />
                <SystemNotificationsTable />
            </Paper>

            {/* <AddFormCategorySettingsModal open={addModal} onClose={handleAddModal} /> */}

            <AddNewSystemAlertDrawer open={drawer} onClose={handleDrawer} />
        </Stack>
    );
};

export default SystemNotificationsSettings;
