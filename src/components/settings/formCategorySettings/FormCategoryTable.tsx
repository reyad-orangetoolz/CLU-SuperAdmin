import React from 'react';

import {
    Avatar,
    ChevronUpDownIcon,
    DeleteIcon,
    DeleteModal,
    EditIcon,
    IconButton,
    InfoCircleIcon,
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

const FormCategoryTable: React.FC = () => {
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
                                        TYPE
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Created at
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Avatar size='small'>A</Avatar>
                                    <Typography>New Campaign</Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>09/07/2023 08:47 AM</TableCell>
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

export default FormCategoryTable;
