import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    CollapseSidebarIcon,
    ExpandSidebarIcon,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SearchIcon,
    Stack,
    TextField,
    useTheme,
    VkIcon,
} from 'convertupleads-theme';
import { useSelector } from 'react-redux';
import { selectFolderState } from '../../state/features/folder/folderSelector';
import SidebarFooter from './SidebarFooter.tsx';
import { FIRST_SIDEBAR_LIST } from '../../helpers/constant/settingsSidebarListConstant.tsx';
import { SidebarWrapper } from './SidebarStyles.tsx';

interface Props {
    onToggleSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ToggleSettings {
    link: string | undefined;
    expand: ReactNode | undefined;
}

const sidebarCollapseButton = {
    p: 2,
    height: 4,
    width: 4,
    border: '1px solid',
    borderColor: 'other.outlinedBorder',
    borderRadius: '8px',
    cursor: 'pointer',
};

const Sidebar: React.FC<Props> = ({ onToggleSettings }) => {
    const { data, isLoading } = useSelector(selectFolderState);
    const theme = useTheme();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    console.log(data, isLoading);

    const [selectedTitle, setSelectedTitle] = useState('');

    const handleListItemClick = (title: string) => {
        setSelectedTitle(title);
    };

    const handleSidebarCollapse = () => {
        setOpen((prevState) => !prevState);
    };

    const updateStateOnScreenSize = () => {
        const screenWidth = window.innerWidth;
        setOpen(screenWidth < 1366);
    };

    useEffect(() => {
        updateStateOnScreenSize();

        // Add event listener to update state on window resize
        window.addEventListener('resize', updateStateOnScreenSize);

        // Cleanup: Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateStateOnScreenSize);
        };
    }, []);

    const handleToggleSettings = ({ link, expand }: ToggleSettings) => {
        onToggleSettings(expand ? true : false);
        // setAnchorEl(null);
        navigate(link ? link : '');
    };

    return (
        <SidebarWrapper direction={'row'} className={open ? 'sidebarCollapsed' : ''} open={open}>
            <Stack bgcolor={'common.white'} justifyContent={'space-between'} width={'100%'}>
                <Box>
                    {/* Logo & Collapse Button */}
                    <Stack
                        direction={!open ? 'row' : 'column'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        pt={2}
                        px={2}
                        mb={4}
                        spacing={2}
                    >
                        <VkIcon />

                        {window.innerWidth > 1366 && (
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                                sx={sidebarCollapseButton}
                                onClick={handleSidebarCollapse}
                            >
                                {!open ? (
                                    <CollapseSidebarIcon sx={{ fill: theme.palette.text.secondary }} />
                                ) : (
                                    <ExpandSidebarIcon sx={{ fill: theme.palette.text.secondary }} />
                                )}
                            </Stack>
                        )}
                    </Stack>

                    {/* Search bar */}
                    {!open ? (
                        <Box p={1} px={2}>
                            <TextField
                                fullWidth
                                // onChange={(e) => handleSearch(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <SearchIcon
                                                sx={{
                                                    fill: theme.palette.text.tertiary,
                                                    height: 20,
                                                    width: 20,
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                variant='outlined'
                                placeholder={'Search'}
                            />
                        </Box>
                    ) : (
                        <Stack alignItems={'center'}>
                            <SearchIcon
                                sx={{
                                    fill: theme.palette.text.tertiary,
                                    height: 20,
                                    width: 20,
                                }}
                            />
                        </Stack>
                    )}

                    {/* Sidebar nav */}
                    <List dense sx={{ p: open ? 2 : '' }} component='nav' aria-label='main mailbox folders'>
                        {FIRST_SIDEBAR_LIST.map((list) => {
                            return (
                                <ListItem
                                    key={list.title}
                                    secondaryAction={
                                        !open &&
                                        list.secondaryIcon && (
                                            <IconButton edge='end' aria-label='comments'>
                                                {list.secondaryIcon}
                                            </IconButton>
                                        )
                                    }
                                    disablePadding
                                    onClick={() => handleToggleSettings({ link: list.link, expand: list?.secondaryIcon })}
                                >
                                    <ListItemButton
                                        selected={selectedTitle === list.title}
                                        onClick={() => {
                                            navigate(list.link ? list.link : '');
                                            handleListItemClick(list.title);
                                        }}
                                    >
                                        <ListItemIcon>{list.icon}</ListItemIcon>
                                        <ListItemText primary={list.title} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>

                {/* Sidebar Footer */}
                <SidebarFooter onToggleSettings={onToggleSettings} collapsed={open} />
            </Stack>
        </SidebarWrapper>
    );
};

export default Sidebar;
