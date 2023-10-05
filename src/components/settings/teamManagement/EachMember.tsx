import React from 'react';

import {
    ArrowDropDownFilledIcon,
    Avatar,
    Button,
    DeleteIcon,
    DeleteModal,
    DuplicateIcon,
    EditIcon,
    IconButton,
    LoginIcon,
    Stack,
    TableCell,
    TableRow,
    Typography,
} from 'convertupleads-theme';
import { USER_ROLE } from '../../../helpers/constant/coreConstants';
import EditMemberDrawer from './drawer/EditMemberDrawer';
import UserRolePopover from './popover/UserRolePopover';
import UserStatusPopover from './popover/UserStatusPopover';

interface Props {
    item: {
        userName: string;
        email: string;
        phone: string;
        role: number; // Adjust this type to match your specific role type
        status: number; // Adjust this type to match your specific status type
        lastActivity: string; // Adjust this type to match your specific date format or type
    };
}

const EachMember: React.FC<Props> = ({ item }) => {
    const { userName, email, phone, role, status, lastActivity } = item || {};

    const [userRole, setUserRole] = React.useState(role);

    const [editMemberDrawer, setEditMemberDrawer] = React.useState(false);
    const handleEditMemberDrawer = () => setEditMemberDrawer((prevState) => !prevState);

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleOpenDeleteModal = () => setOpenDeleteModal((prevState) => !prevState);

    const getUserRole = () => {
        switch (userRole) {
            case USER_ROLE.OWNER:
                return (
                    <Button variant='tonal' rounded sx={{ py: 0, fontSize: 12 }} color='primary'>
                        OWNER
                    </Button>
                );

            case USER_ROLE.DEVELOPER:
                return (
                    <Button
                        variant='tonal'
                        rounded
                        sx={{ py: 0, fontSize: 12 }}
                        color='info'
                        endIcon={<ArrowDropDownFilledIcon />}
                        onClick={handleUserRolePopover}
                    >
                        DEVELOPER
                    </Button>
                );
            case USER_ROLE.CUSTOMER_SUPPORT:
                return (
                    <Button variant='tonal' rounded sx={{ py: 0, fontSize: 12 }} color='secondary' endIcon={<ArrowDropDownFilledIcon />}>
                        CUSTOMER SUPPORT
                    </Button>
                );

            default:
                break;
        }
    };

    const getUserStatus = () => {
        switch (status) {
            case 1:
                return (
                    <Button
                        variant='tonal'
                        rounded
                        sx={{ py: 0, fontSize: 12 }}
                        endIcon={<ArrowDropDownFilledIcon />}
                        color='success'
                        onClick={handleUserStatusPopover}
                    >
                        ACTIVE
                    </Button>
                );
            case 2:
                return (
                    <Button
                        variant='tonal'
                        rounded
                        sx={{ py: 0, fontSize: 12 }}
                        endIcon={<ArrowDropDownFilledIcon />}
                        color='warning'
                        onClick={handleUserStatusPopover}
                    >
                        PENDING
                    </Button>
                );
            case 3:
                return (
                    <Button
                        variant='tonal'
                        rounded
                        sx={{ py: 0, fontSize: 12 }}
                        endIcon={<ArrowDropDownFilledIcon />}
                        color='inherit'
                        onClick={handleUserStatusPopover}
                    >
                        Deactivate
                    </Button>
                );

            default:
                break;
        }
    };

    const [userRolePopover, setUserRolePopover] = React.useState<HTMLSpanElement | SVGSVGElement | null>(null);
    const [userStatusPopover, setUserStatusPopover] = React.useState<HTMLSpanElement | SVGSVGElement | null>(null);

    const handleUserRolePopover = (event: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        setUserRolePopover(event.currentTarget);
    };
    const handleUserStatusPopover = (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>
    ) => {
        setUserStatusPopover(event.currentTarget);
    };
    const handleClose = () => {
        setUserStatusPopover(null);
        setUserRolePopover(null);
    };
    const openUserRolePopover = Boolean(userRolePopover);
    const userRolePopoverId = openUserRolePopover ? 'simple-popover' : undefined;

    const openUserStatusPopover = Boolean(userStatusPopover);
    const userStatusPopoverId = openUserStatusPopover ? 'simple-popover' : undefined;

    return (
        <TableRow>
            <TableCell>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Avatar size='small'>OP</Avatar>
                    <Typography variant='body2' fontWeight={500} color={'text.primary'}>
                        {userName}
                    </Typography>
                </Stack>
            </TableCell>

            <TableCell>
                <Stack>
                    <Typography variant='body2' color={'text.secondary'}>
                        {email}
                    </Typography>
                    <Typography variant='body2' color={'text.secondary'}>
                        {phone}
                    </Typography>
                </Stack>
            </TableCell>

            <TableCell>{getUserRole()}</TableCell>

            <TableCell>{getUserStatus()}</TableCell>

            <TableCell>{lastActivity}</TableCell>

            <TableCell>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <IconButton size='small' onClick={handleEditMemberDrawer}>
                        <EditIcon />
                    </IconButton>
                    <IconButton size='small' onClick={() => {}}>
                        <DuplicateIcon />
                    </IconButton>

                    <IconButton size='small' onClick={() => {}}>
                        <LoginIcon />
                    </IconButton>

                    <IconButton size='small' onClick={handleOpenDeleteModal} color='error'>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </TableCell>

            {/* <EditCampaignCategorySettingsModal open={editModal} onClose={handleEditModal} /> */}
            <DeleteModal open={openDeleteModal} onClose={handleOpenDeleteModal}>
                <></>
            </DeleteModal>

            <EditMemberDrawer open={editMemberDrawer} onClose={handleEditMemberDrawer} />

            <UserRolePopover id={userRolePopoverId} open={openUserRolePopover} status={userRolePopover} onClose={handleClose} />

            <UserStatusPopover id={userStatusPopoverId} open={openUserStatusPopover} status={userStatusPopover} onClose={handleClose} />
        </TableRow>
    );
};

export default EachMember;
