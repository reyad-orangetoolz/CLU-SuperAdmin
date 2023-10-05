import { alpha, Stack, styled, Typography } from 'convertupleads-theme';
import ElementList from './ElementList.tsx';

const SidebarWrapper = styled(Stack)(({ theme }) => ({
    width: '256px',
    height: '100%',
    background: theme.palette.common.white,
    padding: '8px 12px',
    borderRight: `1px solid ${alpha(theme.palette.text.primary, 0.06)}`,
    overflowY: 'auto',
    transition: 'all 300ms ease-in-out',
}));

const SettingSidebar = () => {
    return (
        <SidebarWrapper>
            <Typography variant={'subtitle1'} color={'text.primary'} px={1.4} py={1}>
                Settings
            </Typography>
            <ElementList />
        </SidebarWrapper>
    );
};

export default SettingSidebar;
