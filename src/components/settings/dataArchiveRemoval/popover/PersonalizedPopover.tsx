import React from 'react';

import {
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Popover,
    SearchIcon,
    Stack,
    TextField,
} from 'convertupleads-theme';

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
            <Paper sx={{ width: 'fit-content', maxWidth: '319px' }}>
                <Stack pt={2} px={2.5}>
                    <TextField
                        placeholder={'Search'}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon sx={{ fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        size='small'
                    />
                </Stack>

                <List sx={{ maxHeight: 176, overflowY: 'auto' }} dense>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='User EMAIL' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='User Full Name' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </Popover>
    );
};

export default PersonalizedPopover;
