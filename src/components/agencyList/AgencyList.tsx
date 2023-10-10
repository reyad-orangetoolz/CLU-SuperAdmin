import React from 'react';

import { AddIcon, Button, Divider, Paper, Stack } from 'convertupleads-theme';
import TopNav from '../../common/topNav/TopNav';
import AgencyListSearch from './AgencyListSearch';
import AgencyListFilter from './AgencyListFilter';
import AgencyListTable from './AgencyListTable';
import AddAgencyModal from './modal/AddAgencyModal';

const AgencyList: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalOpen((prevState) => !prevState);
    };

    return (
        <Stack spacing={3} sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }}>
            <TopNav title='Agency List' secondRoute='Agency List '>
                <Button startIcon={<AddIcon />} onClick={handleModalOpen}>
                    Add New Agency Admin
                </Button>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)', border: '1px solid', borderColor: 'other.divider' }}>
                <AgencyListSearch />
                <Divider light />
                <AgencyListFilter />
                <AgencyListTable />
            </Paper>

            <AddAgencyModal open={modalOpen} onClose={handleModalOpen} />
        </Stack>
    );
};

export default AgencyList;
