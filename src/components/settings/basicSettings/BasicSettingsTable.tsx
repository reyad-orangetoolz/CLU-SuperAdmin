import React from 'react';

import {
    ChevronUpDownIcon,
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
import { BASIC_SETTING_MODAL_TYPE } from '../../../helpers/constant/coreConstants';
import EditBasicSettingModal from './modal/EditBasicSettingModal';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

const BasicSettingsTable: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState(BASIC_SETTING_MODAL_TYPE.EDIT_CREDIT);

    const handleModalOpen = () => {
        setModalOpen((prevState) => !prevState);
    };

    const handleModalType = (type: number) => {
        setModalType(type);
        handleModalOpen();
    };

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
                                        Phone
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
                                    <Typography>Minimum credit needed for phone call features</Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalType(BASIC_SETTING_MODAL_TYPE.EDIT_CREDIT)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>SMS forward notification</Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>+1234567890</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalType(BASIC_SETTING_MODAL_TYPE.SMS_FORWARD)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>Call forward email notification</Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>+1234567890</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalType(BASIC_SETTING_MODAL_TYPE.CALL_FORWARD)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>Notification Sender</Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>info@mail.convertupleads.com</TableCell>
                            <TableCell>
                                <IconButton size='small'>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <EditBasicSettingModal type={modalType} open={modalOpen} onClose={handleModalOpen} />
        </>
    );
};

export default BasicSettingsTable;
