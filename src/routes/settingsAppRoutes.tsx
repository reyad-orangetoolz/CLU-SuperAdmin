import Externals from '../components/core/layouts/Externals.tsx';
import BasicSettings from '../components/settings/basicSettings/BasicSettings.tsx';
import CampaignCategorySettings from '../components/settings/campaignCategorySettings/CampaignCategorySettings.tsx';
import CodeSnapSettings from '../components/settings/codeSnap/CodeSnapSettings.tsx';
import CreditSettings from '../components/settings/creditSettings/CreditSettings.tsx';
import DataArchiveRemoval from '../components/settings/dataArchiveRemoval/DataArchiveRemoval.tsx';
import FaqSettings from '../components/settings/faqSettings/FaqSettings.tsx';
import FollowupSettings from '../components/settings/followupSettings/FollowupSettings.tsx';
import FormCategorySettings from '../components/settings/formCategorySettings/FormCategorySettings.tsx';
import SourceSettings from '../components/settings/sourceSettings/SourceSettings.tsx';
import SystemNotificationsSettings from '../components/settings/systemNotifications/SystemNotificationsSettings.tsx';
import TeamManagement from '../components/settings/teamManagement/TeamManagement.tsx';

export const settingsAppRoutes = [
    {
        path: '/basic-setting',
        element: (
            <Externals>
                <BasicSettings />
            </Externals>
        ),
    },
    {
        path: '/credit-setting',
        element: (
            <Externals>
                <CreditSettings />
            </Externals>
        ),
    },
    {
        path: '/campaign-category-settings',
        element: (
            <Externals>
                <CampaignCategorySettings />
            </Externals>
        ),
    },
    {
        path: '/code-snap',
        element: (
            <Externals>
                <CodeSnapSettings />
            </Externals>
        ),
    },
    {
        path: '/data-archive-removal',
        element: (
            <Externals>
                <DataArchiveRemoval />
            </Externals>
        ),
    },
    {
        path: '/form-category-settings',
        element: (
            <Externals>
                <FormCategorySettings />
            </Externals>
        ),
    },
    {
        path: '/followup-settings',
        element: (
            <Externals>
                <FollowupSettings />
            </Externals>
        ),
    },
    {
        path: '/faq-settings',
        element: (
            <Externals>
                <FaqSettings />
            </Externals>
        ),
    },
    {
        path: '/system-notifications',
        element: (
            <Externals>
                <SystemNotificationsSettings />
            </Externals>
        ),
    },
    {
        path: '/source-settings',
        element: (
            <Externals>
                <SourceSettings />
            </Externals>
        ),
    },
    {
        path: '/team-member',
        element: (
            <Externals>
                <TeamManagement />
            </Externals>
        ),
    },
];
