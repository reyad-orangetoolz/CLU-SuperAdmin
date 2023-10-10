import React from 'react';

import { Divider, Paper, Stack } from 'convertupleads-theme';
import TopNav from '../../common/topNav/TopNav';
import UserListFilter from './UserListFilter';
import UserListSearch from './UserListSearch';
import UserListTable from './UserListTable';
import AddAgencyModal from './modal/AddAgencyModal';

const UserList: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <Stack spacing={3} sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }}>
            <TopNav title='User List ' secondRoute='User List' />

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)', border: '1px solid', borderColor: 'other.divider' }}>
                <UserListSearch />
                <Divider light />
                <UserListFilter />
                <UserListTable />
            </Paper>

            <AddAgencyModal open={modalOpen} onClose={handleModalOpen} />
        </Stack>
    );
};

export default UserList;
