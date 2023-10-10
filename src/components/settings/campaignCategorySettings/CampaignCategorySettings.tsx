import { useState } from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import CampaignCategoryFilter from './CampaignCategoryFilter';
import CampaignCategoryTable from './CampaignCategoryTable';
import TopNav from '../../../common/topNav/TopNav';
import AddCampaignCategorySettingsModal from './modal/AddCampaignCategorySettingsModal';

const CampaignCategorySettings = () => {
    const [addModal, setAddModal] = useState(false);

    const handleAddModal = () => {
        setAddModal((prevState) => !prevState);
    };
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Campaign Category Settings' rootRoute='Settings' secondRoute='Campaign Category Settings'>
                <Button onClick={handleAddModal} startIcon={<AddIcon />}>
                    New Campaign Category
                </Button>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <CampaignCategoryFilter />
                <CampaignCategoryTable />
            </Paper>

            <AddCampaignCategorySettingsModal open={addModal} onClose={handleAddModal} />
        </Stack>
    );
};

export default CampaignCategorySettings;
