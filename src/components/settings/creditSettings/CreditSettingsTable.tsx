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
import { CREDIT_SETTING_MODAL_TYPE } from '../../../helpers/constant/coreConstants';
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

    // for open edit modal
    const handleModalOpen = (type: string) => {
        setEditModalOpen((prevState) => !prevState);
        setModalType(type);
    };

    // for open the info modal of description of TYPE column in the table
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
                                    <Typography>{CREDIT_SETTING_MODAL_TYPE.SMS.type}</Typography>
                                    <InfoCircleIcon cursor={'pointer'} onClick={() => handleInfoOpen(CREDIT_SETTING_MODAL_TYPE.SMS.type)} sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>${CREDIT_SETTING_MODAL_TYPE.SMS.credit}</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalOpen(CREDIT_SETTING_MODAL_TYPE.SMS.type)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>{CREDIT_SETTING_MODAL_TYPE.MMS.type}</Typography>
                                    <InfoCircleIcon cursor={'pointer'} onClick={() => handleInfoOpen(CREDIT_SETTING_MODAL_TYPE.MMS.type)} sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>${CREDIT_SETTING_MODAL_TYPE.MMS.credit}</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalOpen(CREDIT_SETTING_MODAL_TYPE.MMS.type)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Typography>{CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type}</Typography>
                                    <InfoCircleIcon cursor={'pointer'} onClick={() => handleInfoOpen(CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type)} sx={{ fontSize: 16, color: 'action.active' }} />
                                </Stack>
                            </TableCell>
                            <TableCell>${CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.credit}</TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={() => handleModalOpen(CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type)}>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* CreditSettingInfoModal for description of type column */}
            <CreditSettingInfoModal open={infoModalOpen} onClose={() => setInfoModalOpen(false)} type={modalType} />
            <EditCreditSettingModal open={editModalOpen} onClose={() => setEditModalOpen(false)} type={modalType} />
        </>
    );
};

export default CreditSettingsTable;
