import React from 'react';

import {
    Button,
    Checkbox,
    ChevronUpDownIcon,
    IconButton,
    LoginIcon,
    PersonFilledIcon,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    UserResendEmailIcon,
    styled,
} from 'convertupleads-theme';
import AscendingDescendingPopOver from '../../common/AscendingDescendingPopOver';
import UserStatus from './UserStatus';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

const UserListTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table variant='bordered'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Checkbox size='small' />

                                        <Typography variant={'overline'} color={'text.tertiary'}>
                                            ID
                                        </Typography>
                                    </Stack>

                                    <AscendingDescendingPopOver />
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Agency
                                    </Typography>

                                    <AscendingDescendingPopOver />
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Full Name & Email
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        User Type
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Parent Name
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
                            <StyledTableCell>Recurring</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Checkbox size='small' />
                                    <Typography variant='body2' color={'text.secondary'}>
                                        01
                                    </Typography>
                                </Stack>
                            </TableCell>
                            <TableCell>Next Innovation Bd Agency</TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    Imran test stage
                                </Typography>
                                <Typography variant='body2' color={'text.secondary'}>
                                    imrantest@ornagetoolz.com
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant='tonal'
                                    color='success'
                                    size='small'
                                    rounded
                                    startIcon={<PersonFilledIcon sx={{ fontSize: 16 }} />}
                                >
                                    Parent
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    Next Innovation Bd
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <UserStatus />
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    2023-02-13 10:38:02
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Switch variant={'onOff'} color={'primary'} />
                            </TableCell>
                            <TableCell>
                                <IconButton size='small'>
                                    <LoginIcon sx={{ fontSize: 18 }} />
                                </IconButton>

                                <Tooltip title='Resend Reg Email'>
                                    <IconButton size='small'>
                                        <UserResendEmailIcon sx={{ fontSize: 18 }} />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default UserListTable;
