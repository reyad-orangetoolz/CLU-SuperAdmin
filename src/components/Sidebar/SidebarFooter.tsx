import React from 'react';
import { alpha, Avatar, Badge, Box, IconButton, MoreHorizontalIcon, Popover, Stack, Typography, useTheme } from 'convertupleads-theme';
import SidebarSettingMenu from './SidebarSettingMenu.tsx';

interface Props {
    collapsed: boolean;
    onToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarFooter: React.FC<Props> = ({ onToggleSettings, collapsed }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box borderTop={'1px solid'} borderColor={alpha(theme.palette.text.primary, 0.06)}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={!collapsed ? 'space-between' : 'center'} p={2}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Box component='span'>
                        <Badge
                            color='success'
                            variant='dot'
                            overlap='circular'
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            onClick={handleClick}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Avatar
                                size='medium'
                                alt='Remy Sharp'
                                src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
                            />
                        </Badge>
                    </Box>

                    {!collapsed && (
                        <Typography variant='subtitle2' color={'text.secondary'}>
                            Bruce Wayne
                        </Typography>
                    )}
                </Stack>

                {!collapsed && (
                    <IconButton onClick={handleClick}>
                        <MoreHorizontalIcon
                            sx={{
                                color: alpha(theme.palette.text.primary, 0.56),
                                cursor: 'pointer',
                            }}
                        />
                    </IconButton>
                )}
            </Stack>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                slotProps={{
                    paper: {
                        style: {
                            background: 'none', // Remove the paper background
                            boxShadow: 'none', // Remove box shadow
                        },
                    },
                }}
            >
                <SidebarSettingMenu onToggleSettings={onToggleSettings} setAnchorEl={setAnchorEl} />
            </Popover>
        </Box>
    );
};

export default SidebarFooter;
