import React, { ChangeEvent } from 'react';
import { Button, Divider, FilterIcon, InputAdornment, SearchIcon, Stack, TextField } from 'convertupleads-theme';

const TeamManagementFilter: React.FC = () => {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.trim());
    }

    return (
        <>
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
                    size='small'
                />

                <Button startIcon={<FilterIcon />} variant={'tonal'} color={'inherit'}>
                    Filters
                </Button>
            </Stack>
            <Divider light />
        </>
    );
};

export default TeamManagementFilter;
