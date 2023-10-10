import { useEffect, useState } from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import TeamManagementFilter from './TeamManagementFilter';
import TeamManagementTable from './TeamManagementTable';
import TeamManagementPagination from './TeamManagementPagination';
import AddMemberDrawer from './drawer/AddMemberDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeam } from '../../../state/features/settings/teamMember/teamSelector';
import { AppDispatch } from '../../../state/store';
import { attemptCreateRoleClear, attemptCreateRoleOpen } from '../../../state/features/settings/teamMember/teamSlice';
import CreateRoleDrawer from './drawer/CreateRoleDrawer';

const TeamManagement = () => {
    const [addMemberDrawer, setAddMemberDrawer] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const { isCreateRole } = useSelector(selectTeam);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddMemberDrawer = () => setAddMemberDrawer((prevState) => !prevState);

    const handleCreateRoleDrawer = () => {
        dispatch(attemptCreateRoleOpen());
    }

    useEffect(() => {
        isCreateRole && setOpen((prevState) => !prevState);
        dispatch(attemptCreateRoleClear());
    }, [isCreateRole]);

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
            <CreateRoleDrawer open={open} onClose={handleCreateRoleDrawer} />
        </Stack>
    );
};

export default TeamManagement;
