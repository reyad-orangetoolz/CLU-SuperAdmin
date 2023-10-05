import React from 'react';

import { CheckIcon, List, ListItem, ListItemButton, ListItemText, Paper, Popover } from 'convertupleads-theme';

interface Props {
    id: string | undefined;
    open: boolean;
    status: HTMLSpanElement | SVGSVGElement | null;
    onClose: () => void;
}

const UserStatusPopover: React.FC<Props> = ({ id, open, status, onClose }) => {
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
                            <ListItemText primary='Active' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Pending' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding secondaryAction={<CheckIcon sx={{ fontSize: 20 }} color='primary' />}>
                        <ListItemButton>
                            <ListItemText primary='Deactivate ' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </Popover>
    );
};

export default UserStatusPopover;
