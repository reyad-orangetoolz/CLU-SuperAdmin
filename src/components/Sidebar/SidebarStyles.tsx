import { alpha, Stack, styled } from 'convertupleads-theme';

interface SidebarStyleInterface {
    open?: boolean;
}

export const SidebarWrapper = styled(Stack)<SidebarStyleInterface>(({ theme, open }) => ({
    width: open ? 80 : 256,
    minWidth: 80,
    height: '100vh',
    borderRight: `1px solid ${alpha(theme.palette.text.primary, 0.06)}`,
    overflowY: 'auto',
    transition: 'all 300ms ease-in-out',

    '&.sidebarCollapsed': {
        '& .MuiListItemText-root': {
            width: 0,
            display: 'none',
        },
        '& .Mui-selected': {
            ':before': {
                content: "''",
                height: 32,
                width: 3,
                position: 'absolute',
                right: -19,
                background: theme.palette.primary.main,
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
            },
        },
        '& .MuiListItemButton-root': {
            width: 44,
            padding: 12,
        },
        '& .MuiListItem-root': {
            width: 44,
            // padding: 12,
            '& .MuiButtonBase-root': {
                // display: 'none'
            },
        },
    },
}));
