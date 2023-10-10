import React, { useState } from 'react';
import { ArrowDropDownFilledIcon, Button, List, ListItemButton, ListItemText, Popover } from 'convertupleads-theme';

interface statusInterface {
    userStatus?: string;
}

const UserStatus: React.FC<statusInterface> = ({ userStatus = 'Active' }) => {
    const [status, setStatus] = useState(userStatus);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handelChangeStatus = (state: string) => {
        setStatus(state);
        setAnchorEl(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return (
        <div>
            <Button
                size={'small'}
                color={status === 'Active' ? 'success' : status === 'Pending' ? 'warning' : 'inherit'}
                variant={'tonal'}
                endIcon={<ArrowDropDownFilledIcon />}
                onClick={handleClick}
                rounded
            >
                {status}
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List dense>
                    <ListItemButton selected={status === 'Active'} onClick={() => handelChangeStatus('Active')}>
                        <ListItemText>Active</ListItemText>
                    </ListItemButton>
                    <ListItemButton selected={status === 'Pending'} onClick={() => handelChangeStatus('Pending')}>
                        <ListItemText>Pending</ListItemText>
                    </ListItemButton>
                    <ListItemButton selected={status === 'Deactivate'} onClick={() => handelChangeStatus('Deactivate')}>
                        <ListItemText>Deactivate</ListItemText>
                    </ListItemButton>
                </List>
            </Popover>
        </div>
    );
};

export default UserStatus;
