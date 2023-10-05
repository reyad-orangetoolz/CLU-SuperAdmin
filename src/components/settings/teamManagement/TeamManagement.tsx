import { useState } from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import TeamManagementFilter from './TeamManagementFilter';
import TeamManagementTable from './TeamManagementTable';
import TeamManagementPagination from './TeamManagementPagination';
import AddMemberDrawer from './drawer/AddMemberDrawer';
import CreateRoleDrawer from './drawer/CreateRoleDrawer';

const TeamManagement = () => {
    const [addMemberDrawer, setAddMemberDrawer] = useState(false);
    const [createRoleDrawer, setCreateRoleDrawer] = useState(false);

    const handleAddMemberDrawer = () => setAddMemberDrawer((prevState) => !prevState);
    const handleCreateRoleDrawer = () => setCreateRoleDrawer((prevState) => !prevState);

    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Team Management' rootRoute='Settings' secondRoute='Team Management'>
                <Stack direction={'row'} spacing={1}>
                    <Button variant='outlined' onClick={handleCreateRoleDrawer}>
                        Create Role
                    </Button>

                    <Button onClick={handleAddMemberDrawer} startIcon={<AddIcon />}>
                        Add Member
                    </Button>
                </Stack>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <TeamManagementFilter />
                <TeamManagementPagination />
                <TeamManagementTable />
            </Paper>

            {/* <AddFormCategorySettingsModal open={addModal} onClose={handleAddModal} /> */}

            <AddMemberDrawer open={addMemberDrawer} onClose={handleAddMemberDrawer} />
            <CreateRoleDrawer open={createRoleDrawer} onClose={handleCreateRoleDrawer} />
        </Stack>
    );
};

export default TeamManagement;
