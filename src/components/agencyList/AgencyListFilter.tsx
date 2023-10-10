import React from 'react';
import { Chip, Divider, Stack, TablePagination, Typography } from 'convertupleads-theme';

const AgencyListFilter = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} px={2} py={0.25}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography variant='body2' fontSize={12} color={'text.secondary'}>
                        Total Agency
                    </Typography>

                    <Chip label='12' color='success' variant='tonal' size='xSmall' />
                </Stack>

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

export default AgencyListFilter;
