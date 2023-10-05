import React from 'react';
import {
    Paper,
    Stack,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Folder2Icon,
    DeleteIcon,
    ArchiveIcon,
    Divider,
    FolderIcon,
    Badge,
    Button,
    AddIcon,
} from 'convertupleads-theme';

const FaqLeftSideWrapperStyle = {
    height: 'calc(100vh - 120px)',
    width: 320,
    borderRight: '1px solid',
    borderColor: 'other.divider',
    borderRadius: 0,
};

const FaqLeftSide: React.FC = () => {
    return (
        <Paper elevation={0} sx={FaqLeftSideWrapperStyle}>
            <Stack height={'100%'} justifyContent={'space-between'}>
                <Stack>
                    <Stack p={2}>
                        <Typography variant='h6' color={'text.primary'}>
                            FAQ Settings
                        </Typography>
                    </Stack>

                    <List>
                        <ListItem
                            disablePadding
                            secondaryAction={
                                <Badge
                                    color={'info'}
                                    badgeContent={100}
                                    sx={{ '& .MuiBadge-badge': { position: 'relative', transform: 'none' } }}
                                />
                            }
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Folder2Icon sx={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary='All FAQ  ' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArchiveIcon sx={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary='Archive' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DeleteIcon sx={{ fontSize: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary='Trash' />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider light />

                    <Stack py={2} spacing={1}>
                        <Typography variant='overline' color={'text.tertiary'} px={2}>
                            Category
                        </Typography>

                        <List>
                            <ListItem
                                disablePadding
                                secondaryAction={
                                    <Badge
                                        color={'info'}
                                        badgeContent={14}
                                        sx={{ '& .MuiBadge-badge': { position: 'relative', transform: 'none' } }}
                                    />
                                }
                            >
                                <ListItemButton selected={true}>
                                    <ListItemIcon>
                                        <FolderIcon sx={{ fontSize: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText primary='All FAQ  ' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon sx={{ fontSize: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText primary='Archive' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FolderIcon sx={{ fontSize: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText primary='Trash' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Stack>
                </Stack>

                <Stack>
                    <Divider light />

                    <Stack p={2}>
                        <Button variant='tonal' startIcon={<AddIcon />}>
                            Add New Category
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default FaqLeftSide;
