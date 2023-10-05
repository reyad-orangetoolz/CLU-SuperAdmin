import React, { useState } from 'react';

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
import EditCreditSettingModal from './modal/EditCreditSettingModal';
import { CREDIT_TYPE } from '../../../helpers/constant/coreConstants';
import CreditSettingInfoModal from './modal/CreditSettingInfoModal';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

const CreditSettingsTable: React.FC = () => {
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState('');

    const handleModalOpen = (type: string) => {
        setEditModalOpen((prevState) => !prevState);
        setModalType(type);
    };

    const handleInfoOpen = (type: string) => {
        setInfoModalOpen((prevState) => !prevState);
        setModalType(type);
    }

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
                                    <IconButton onClick={() => { }} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Credit Cost Rate
                                    </Typography>
                                    <IconButton onClick={() => { }} size='small'>
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
                                    <Typography>SMS</Typography>
                                    <InfoCircleIcon cursor={'pointer'} onClick={() => handleInfoOpen(CREDIT_TYPE.SMS)} sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>$0.010000</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalOpen(CREDIT_TYPE.SMS)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>MMS </Typography>
                                    <InfoCircleIcon cursor={'pointer'} onClick={() => handleInfoOpen(CREDIT_TYPE.MMS)} sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>$0.040000</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalOpen(CREDIT_TYPE.MMS)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>RINGLESS VOICEMAIL</Typography>
                                    <InfoCircleIcon cursor={'pointer'} onClick={() => handleInfoOpen(CREDIT_TYPE.RINGLESS_VOICE_MAIL)} sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>$0.040000</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalOpen(CREDIT_TYPE.RINGLESS_VOICE_MAIL)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <CreditSettingInfoModal open={infoModalOpen} onClose={() => setInfoModalOpen(false)} type={modalType} />
            <EditCreditSettingModal open={editModalOpen} onClose={() => setEditModalOpen(false)} type={modalType} />
        </>
    );
};

export default CreditSettingsTable;
