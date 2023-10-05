import EachList, { SidebarListInterface } from '../../interface/each-list.interface.ts';
import {
    AudienceIcon,
    AutomationIcon,
    ChevronRightIcon,
    CollaborationIcon,
    DashboardIcon,
    FormBuilderIcon,
    NotificationIcon,
    ReportIcon,
    ServicesIcon,
    SettingsIcon,
} from 'convertupleads-theme';

export const FIRST_SIDEBAR_LIST: SidebarListInterface[] = [
    {
        icon: <DashboardIcon fontSize='small' />,
        title: 'Dashboard',
        link: '/dashboard',
    },
    {
        icon: <AudienceIcon fontSize='small' />,
        title: 'Agency List',
        link: '/agency-list',
    },
    {
        icon: <CollaborationIcon fontSize='small' />,
        title: 'User List ',
        link: '/user-list ',
    },
    {
        icon: <ServicesIcon fontSize='small' />,
        title: 'Services Request',
        link: '/services-request',
    },
    {
        icon: <FormBuilderIcon fontSize='small' />,
        title: 'Billing & Package',
        link: '/billing-package',
        secondaryIcon: <ChevronRightIcon />,
    },
    {
        icon: <ReportIcon fontSize='small' />,
        title: 'Reports',
        link: '/reports',
        secondaryIcon: <ChevronRightIcon />,
    },
    {
        icon: <AutomationIcon fontSize='small' />,
        title: 'Templates',
        link: '/templates',
        secondaryIcon: <ChevronRightIcon />,
    },
    {
        icon: <SettingsIcon fontSize='small' />,
        title: 'Settings',
        link: '/basic-setting',
        secondaryIcon: <ChevronRightIcon />,
    },
    {
        icon: <NotificationIcon fontSize='small' />,
        title: 'Notification',
        link: '/notification',
    },
];

export const ALL_DATA_LISTS: EachList[] = [
    {
        title: 'Basic Settings',
        link: '/basic-setting',
    },
    {
        title: 'Credit Settings',
        link: '/credit-setting',
    },
    {
        title: 'Campaign Category Settings',
        link: '/campaign-category-settings',
    },
    {
        title: 'Code Snap',
        link: '/code-snap',
    },
    {
        title: 'Data Archive & Removal',
        link: '/data-archive-removal',
    },
    {
        title: 'Error Show',
        link: '/error-show',
    },
    {
        title: 'Form Category Settings',
        link: '/form-category-settings',
    },
    {
        title: 'Followup Settings',
        link: '/followup-settings',
    },
    {
        title: 'FAQ Settings',
        link: '/faq-settings',
    },
    {
        title: 'Help Videos',
        link: '/help-videos',
    },
    {
        title: 'Agency Mail Alert',
        link: '/agency-mail-alert',
    },
    {
        title: 'Relation Settings',
        link: '/relation-settings',
    },
    {
        title: 'System Notifications',
        link: '/system-notifications',
    },
    {
        title: 'Source Settings',
        link: '/source-settings',
    },
    {
        title: 'Team Member',
        link: '/team-member',
    },

    // {
    //     title: 'Profile Settings',
    //     subMenu: [
    //         { title: 'My Profile', link: '/profile' },
    //         { title: 'Change Password', link: '/password-change' },
    //         { title: 'Company Info', link: '/company-info' },
    //         { title: 'Branding Settings', link: '/branding-settings' },
    //         { title: 'Team Management', link: '/team-management' },
    //         { title: 'Quick Clone ', link: '/quick-clone ' },
    //         { title: 'Authorization', link: '/authorization' },
    //     ],
    // },
];
