import React, { useState } from 'react';

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
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../state/store';
import { attemptCreateRoleOpen } from '../../../../state/features/settings/teamMember/teamSlice';
import { USERS } from '../TeamManagementTable';

interface Props {
    id: string | undefined;
    open: boolean;
    status: HTMLSpanElement | SVGSVGElement | null;
    onClose: () => void;
    rowId: number;
    rowRole: number;
}

const UserRolePopover: React.FC<Props> = ({ id, open, status, onClose, rowId, rowRole }) => {
    const [check, setCheck] = useState<number | null>(rowRole);
    const dispatch = useDispatch<AppDispatch>();


    const handleCreateRoleDrawer = () => {
        dispatch(attemptCreateRoleOpen());
        onClose();
    };

    const handleRole = (rowId: number, role: number) => {
        setCheck(role);
        USERS.map((user) => {
            if (user.id === rowId) {
                user.role = role;
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
            <Paper sx={{ width: 220 }}>
                <List>
                    <ListItem disablePadding secondaryAction={check == 1 && <CheckIcon sx={{ fontSize: 20 }} color='primary' />} onClick={() => handleRole(rowId, 1)}>
                        <ListItemButton>
                            <ListItemText primary='Admin' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding secondaryAction={check == 2 && <CheckIcon sx={{ fontSize: 20 }} color='primary' />} onClick={() => handleRole(rowId, 2)}>
                        <ListItemButton>
                            <ListItemText primary='Customer support' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding secondaryAction={check == 3 && <CheckIcon sx={{ fontSize: 20 }} color='primary' />} onClick={() => handleRole(rowId, 3)}>
                        <ListItemButton>
                            <ListItemText primary='Developer ' />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider light />
                <Stack p={1}>
                    <Button variant='text' startIcon={<AddIcon />} fullWidth onClick={handleCreateRoleDrawer}>
                        Create Role
                    </Button>
                </Stack>
            </Paper>
        </Popover>
    );
};

export default UserRolePopover;
