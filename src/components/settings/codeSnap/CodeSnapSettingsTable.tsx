import React from 'react';
import {
    ChevronUpDownIcon,
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

const CodeSnapSettingsTable: React.FC = () => {
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
                                        Type
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Agency Name
                                    </Typography>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Position
                                    </Typography>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Page
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
                                        SMS
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    Agency 1
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    SMS
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
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <DeleteModal open={openDeleteModal} onClose={handleOpenDeleteModal}>
                <></>
            </DeleteModal>

            <ModalWithHeader title='Snap Edit' open={editModal} onClose={handleEditModal} width={600}>
                <Stack p={2}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione praesentium recusandae hic harum, quam fugit
                        incidunt consequuntur id dolore doloremque repellendus? Numquam doloremque sequi dolore fugiat eveniet repudiandae
                        distinctio?
                    </Typography>
                </Stack>
            </ModalWithHeader>
        </>
    );
};

export default CodeSnapSettingsTable;
