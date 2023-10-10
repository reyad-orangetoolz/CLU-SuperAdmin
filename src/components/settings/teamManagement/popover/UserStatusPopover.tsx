import React, { useState } from 'react';

import { CheckIcon, List, ListItem, ListItemButton, ListItemText, Paper, Popover } from 'convertupleads-theme';
import { USERS } from '../TeamManagementTable';

interface Props {
    id: string | undefined;
    open: boolean;
    status: HTMLSpanElement | SVGSVGElement | null;
    onClose: () => void;
    rowId: number;
    rowStatus: number;
}

const UserStatusPopover: React.FC<Props> = ({ id, open, status, onClose, rowId, rowStatus }) => {
    const [check, setCheck] = useState<number | null>(rowStatus);

    const handleItem = (rowId: number, stat: number) => {
        setCheck(stat);
        USERS.map((user) => {
            if (user.id === rowId) {
                user.status = stat;
            }
        })
        onClose();
    }

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
                    <ListItem disablePadding secondaryAction={check == 1 && <CheckIcon sx={{ fontSize: 20 }} color='primary' />} onClick={() => handleItem(rowId, 1)}>
                        <ListItemButton >
                            <ListItemText primary='Active' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding secondaryAction={check == 2 && <CheckIcon sx={{ fontSize: 20 }} color='primary' />} onClick={() => handleItem(rowId, 2)}>
                        <ListItemButton>
                            <ListItemText primary='Pending' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding secondaryAction={check == 3 && <CheckIcon sx={{ fontSize: 20 }} color='primary' />} onClick={() => handleItem(rowId, 3)}>
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
