import React from 'react';

import {
    ChevronUpDownIcon,
    Chip,
    DeleteIcon,
    DeleteModal,
    EditIcon,
    FormControlLabel,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
    Switch,
} from 'convertupleads-theme';
import EditCampaignCategorySettingsModal from './modal/EditCampaignCategorySettingsModal';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

const SystemNotificationsTable: React.FC = () => {
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
                                        Body
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
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
                                        Status
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Created At
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
                            <TableCell>Custom domain for forms added . . .</TableCell>

                            <TableCell>
                                <Chip size='xSmall' variant='tonal' color='warning' label={'Alert'} />
                            </TableCell>

                            <TableCell>
                                <Chip size='xSmall' color='success' label={'Active'} />
                            </TableCell>

                            <TableCell>2020-12-24 06:55:40</TableCell>

                            <TableCell>
                                <FormControlLabel control={<Switch variant={'onOff'} color={'primary'} defaultChecked />} label='' />

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

            <EditCampaignCategorySettingsModal open={editModal} onClose={handleEditModal} />
            <DeleteModal open={openDeleteModal} onClose={handleOpenDeleteModal}>
                <></>
            </DeleteModal>
        </>
    );
};

export default SystemNotificationsTable;
