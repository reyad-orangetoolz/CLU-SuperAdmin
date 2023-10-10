import { Button, FilterIcon, InputAdornment, SearchIcon, Stack, TextField } from 'convertupleads-theme';

const UserListSearch = () => {
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
                    size='small'
                />

                <Button variant={'tonal'} color='inherit' startIcon={<FilterIcon />}>
                    Filters
                </Button>
            </Stack>
        </>
    );
};

export default UserListSearch;
