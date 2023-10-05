import React from 'react';
import {
    ChevronUpDownIcon,
    DeleteIcon,
    DeleteModal,
    EditIcon,
    IconButton,
    ModalWithHeader,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
} from 'convertupleads-theme';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

const FollowupSettingsTable: React.FC = () => {
    const [editModal, setEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

    const handleEditModal = () => setEditModal((prevState) => !prevState);
    const handleOpenDeleteModal = () => setOpenDeleteModal((prevState) => !prevState);

    return (
        <>
            <TableContainer>
                <Table variant='bordered'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Gateway
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Subject
                                    </Typography>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Error type
                                    </Typography>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Followup Limit
                                    </Typography>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography variant='body2' fontWeight={500} color={'text.primary'}>
                                        Nylas
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    Credential Expire
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    Credential Expire
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    3
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={handleEditModal}>
                                    <EditIcon />
                                </IconButton>

                                <IconButton size='small' onClick={handleOpenDeleteModal} color='error' sx={{ ml: 1 }}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <DeleteModal open={openDeleteModal} onClose={handleOpenDeleteModal}>
                <></>
            </DeleteModal>
        </>
    );
};

export default FollowupSettingsTable;
