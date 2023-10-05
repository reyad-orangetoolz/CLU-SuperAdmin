import { Stack } from 'convertupleads-theme';
import CommonPageLayout from '../../../common/CommonPageLayout';
import BasicSettingFilter from './BasicSettingFilter';
import BasicSettingsTable from './BasicSettingsTable';

const BasicSettings = () => {
    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }}>
            <CommonPageLayout title='Basic Settings' secondRoute='Basic Settings'>
                <BasicSettingFilter />
                <BasicSettingsTable />
            </CommonPageLayout>
        </Stack>
    );
};

export default BasicSettings;
