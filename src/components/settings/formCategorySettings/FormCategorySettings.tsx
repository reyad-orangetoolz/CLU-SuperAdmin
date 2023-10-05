import { useState } from 'react';
import { Button, Stack, Paper, AddIcon } from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import FormCategoryFilter from './FormCategoryFilter';
import FormCategoryTable from './FormCategoryTable';
import AddFormCategorySettingsModal from './modal/AddFormCategorySettingsModal';

const FormCategorySettings = () => {
    const [addModal, setAddModal] = useState(false);

    const handleAddModal = () => {
        setAddModal((prevState) => !prevState);
    };
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Form Category Settings' rootRoute='Settings' secondRoute='Form Category Settings'>
                <Button onClick={handleAddModal} startIcon={<AddIcon />}>
                    New Form Category
                </Button>
            </TopNav>

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <FormCategoryFilter />
                <FormCategoryTable />
            </Paper>

            <AddFormCategorySettingsModal open={addModal} onClose={handleAddModal} />
        </Stack>
    );
};

export default FormCategorySettings;
