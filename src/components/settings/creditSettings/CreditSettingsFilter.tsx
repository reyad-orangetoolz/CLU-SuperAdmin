import React, { ChangeEvent } from 'react';

import { Divider, InputAdornment, SearchIcon, Stack, TablePagination, TextField } from 'convertupleads-theme';

const CreditSettingsFilter = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // search bar handler
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.trim());
    }
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={2} py={1}>
                <TextField
                    placeholder={'Search'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)} // call handle search for each change in search bar
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <SearchIcon sx={{ fontSize: 20 }} />
                            </InputAdornment>
                        ),
                    }}
                    size='small'
                />

                <TablePagination
                    component='div'
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    size='small'
                />
            </Stack>
            <Divider light />
        </>
    );
};

export default CreditSettingsFilter;
