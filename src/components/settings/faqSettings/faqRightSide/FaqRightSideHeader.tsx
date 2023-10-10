import React from 'react';
import { Stack, TextField, InputAdornment, SearchIcon, Button, AddIcon } from 'convertupleads-theme';

const FaqRightSideHeader: React.FC = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} p={2}>
            <TextField
                placeholder={'Search'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon sx={{ fontSize: 20 }} />
                        </InputAdornment>
                    ),
                }}
                size='small'
            />

            <Button startIcon={<AddIcon />}>Add New Video</Button>
        </Stack>
    );
};

export default FaqRightSideHeader;
