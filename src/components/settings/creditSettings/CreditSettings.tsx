import { Stack } from 'convertupleads-theme';
import CommonPageLayout from '../../../common/CommonPageLayout';
import CreditSettingsTable from './CreditSettingsTable';
import CreditSettingsFilter from './CreditSettingsFilter';

const CreditSettings = () => {
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }}>
            <CommonPageLayout title='Credit Settings' rootRoute='Settings' secondRoute='Credit Settings'>
                <CreditSettingsFilter />
                <CreditSettingsTable />
            </CommonPageLayout>
        </Stack>
    );
};

export default CreditSettings;
