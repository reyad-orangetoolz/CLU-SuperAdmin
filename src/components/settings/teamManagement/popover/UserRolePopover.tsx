import React from 'react';

import {
    AddIcon,
    Button,
    CheckIcon,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Popover,
    Stack,
} from 'convertupleads-theme';

interface Props {
    id: string | undefined;
    open: boolean;
    status: HTMLSpanElement | SVGSVGElement | null;
    onClose: () => void;
}

const UserRolePopover: React.FC<Props> = ({ id, open, status, onClose }) => {
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={status}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            slotProps={{
                paper: {
                    style: {
                        background: 'none', // Remove the paper background
                        // boxShadow: 'none', // Remove box shadow
                    },
                },
            }}
            sx={{ mt: 1 }}
        >
            <Paper sx={{ width: 189 }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Admin' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Customer support' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding secondaryAction={<CheckIcon sx={{ fontSize: 20 }} color='primary' />}>
                        <ListItemButton>
                            <ListItemText primary='Developer ' />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider light />
                <Stack p={1}>
                    <Button variant='text' startIcon={<AddIcon />} fullWidth>
                        Create Role
                    </Button>
                </Stack>
            </Paper>
        </Popover>
    );
};

export default UserRolePopover;
