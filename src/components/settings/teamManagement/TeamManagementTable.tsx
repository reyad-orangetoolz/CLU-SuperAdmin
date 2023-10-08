import React from 'react';

import {
    ChevronUpDownIcon,
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
} from 'convertupleads-theme';
import EachMember from './EachMember';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

export const USERS = [
    {
        id: 1,
        userName: 'Lorem ipsum',
        email: 'LoremIpsum@gmail.com',
        phone: '+1 516 231 1313',
        role: 1,
        status: 1,
        lastActivity: 'Today  ',
    },
    {
        id: 2,
        userName: 'Ipsum Lorem ',
        email: 'IpsumLorem@gmail.com',
        phone: '+1 516 231 1313',
        role: 2,
        status: 2,
        lastActivity: 'Today',
    },
    {
        id: 3,
        userName: 'Lorem Ipsum 2',
        email: 'LoremIpsum2@gmail.com',
        phone: '+1 516 231 1313',
        role: 3,
        status: 3,
        lastActivity: 'Today',
    },
];

const TeamManagementTable: React.FC = () => {
    return (
        <>
            <TableContainer>
                <Table variant='bordered'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Username
                                    </Typography>
                                    <IconButton onClick={() => { }} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Email & Phone
                                    </Typography>
                                    <IconButton onClick={() => { }} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        User Role
                                    </Typography>
                                    <IconButton onClick={() => { }} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        User Status
                                    </Typography>
                                    <IconButton onClick={() => { }} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Last Activities
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
                        {USERS.map((user) => (
                            <EachMember key={user.id} rowId={user.id} item={user} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default TeamManagementTable;
