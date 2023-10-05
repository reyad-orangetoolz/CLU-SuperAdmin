import React from 'react';

import { List, ListItem, ListItemButton, ListItemText, Paper, Popover } from 'convertupleads-theme';

interface Props {
    id: string | undefined;
    open: boolean;
    status: HTMLSpanElement | SVGSVGElement | null;
    onClose: () => void;
}

const PersonalizedPopover: React.FC<Props> = ({ id, open, status, onClose }) => {
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={status}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            slotProps={{
                paper: {
                    style: {
                        background: 'none', // Remove the paper background
                        // boxShadow: 'none', // Remove box shadow
                    },
                },
            }}
        >
            <Paper sx={{ width: 189 }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Name' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Email' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Click Link ' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </Popover>
    );
};

export default PersonalizedPopover;
