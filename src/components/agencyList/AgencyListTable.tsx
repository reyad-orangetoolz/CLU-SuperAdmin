import React, { useState } from 'react';
import {
    ArrowDropDownFilledIcon,
    Button,
    Checkbox,
    ChevronUpDownIcon,
    DeleteIcon,
    EditIcon,
    IconButton,
    LinkIcon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    LoginIcon,
    MailIcon,
    MailSettingsIcon,
    MapOutlinedIcon,
    MoreVerticalIcon,
    Paper,
    Popover,
    RefreshIcon,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    UserIcon,
    UserRemoveIcon,
    UserResendEmailIcon,
    styled,
    useTheme,
} from 'convertupleads-theme';
import AddAgencyModal from './modal/AddAgencyModal';

const StyledTableCell = styled(TableCell)((/* { theme } */) => ({
    '& .MuiIconButton-root': {
        visibility: 'hidden',
    },

    '&:hover .MuiIconButton-root': {
        visibility: 'visible',
    },
}));

const AgencyListTable: React.FC = () => {
    const theme = useTheme();

    const [modalOpen, setModalOpen] = React.useState(false);

    const [actionPopover, setActionPopover] = useState<HTMLSpanElement | SVGSVGElement | null>(null);

    const handleActionPopover = (event: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        setActionPopover(event.currentTarget);
    };

    const openActionPopover = Boolean(actionPopover);
    const actionPopoverId = openActionPopover ? 'simple-popover' : undefined;

    const handleClose = () => {
        setActionPopover(null);
    };

    const handleModalOpen = () => {
        setModalOpen((prevState) => !prevState);
    };

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
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Full Name
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Email & Phone
                                    </Typography>
                                    <IconButton onClick={() => {}} size='small'>
                                        <ChevronUpDownIcon fontSize={'small'} />
                                    </IconButton>
                                </Stack>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant={'overline'} color={'text.tertiary'}>
                                        Package
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
                                    Next Innovation Bd
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    sales@convertupleads.com
                                </Typography>
                                <Typography variant='body2' color={'text.secondary'}>
                                    +1 516 231 1313
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    test 1
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Button variant='tonal' color='success' size='small' rounded endIcon={<ArrowDropDownFilledIcon />}>
                                    Active{' '}
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Typography variant='body2' color={'text.secondary'}>
                                    2023-02-13 10:38:02
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <IconButton size='small' onClick={handleModalOpen}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    size='small'
                                    // onClick={() => handleModalType(BASIC_SETTING_MODAL_TYPE.EDIT_CREDIT)}
                                >
                                    <LoginIcon />
                                </IconButton>
                                <IconButton size='small' onClick={handleActionPopover}>
                                    <MoreVerticalIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <AddAgencyModal open={modalOpen} onClose={handleModalOpen} />

            <Popover
                id={actionPopoverId}
                open={openActionPopover}
                anchorEl={actionPopover}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                slotProps={{
                    paper: {
                        style: {
                            background: 'none', // Remove the paper background
                            // boxShadow: 'none', // Remove box shadow
                        },
                    },
                }}
            >
                <Paper sx={{ p: 1, width: 270 }}>
                    <List
                        sx={{ bgcolor: theme.palette.grey[50], borderRadius: 1.5, mb: 1 }}
                        component='nav'
                        aria-label='main mailbox folders'
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Email Provider' />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <MailSettingsIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Setup Mail' />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <UserResendEmailIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Resend Registration Email' />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <UserIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Enable On Boarding' />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <MapOutlinedIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Enable Map Your Sales' />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <LinkIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Manage Mobile App Link' />
                        </ListItemButton>
                    </List>

                    <List
                        sx={{ bgcolor: theme.palette.grey[50], borderRadius: 1.5 }}
                        component='nav'
                        aria-label='main mailbox folders'
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <RefreshIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Stop Auto Recurring' />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <UserRemoveIcon sx={{ fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText primary='Disable User Registration' />
                        </ListItemButton>

                        <ListItemButton sx={{ color: 'error.main' }}>
                            <ListItemIcon>
                                <DeleteIcon sx={{ fontSize: 18 }} color='error' />
                            </ListItemIcon>
                            <ListItemText primary='Disable User Registration' />
                        </ListItemButton>
                    </List>
                </Paper>
            </Popover>
        </>
    );
};

export default AgencyListTable;
