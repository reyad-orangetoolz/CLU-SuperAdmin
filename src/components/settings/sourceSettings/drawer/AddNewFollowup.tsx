import React from 'react';

import {
    Box,
    Button,
    ChevronDownIcon,
    Divider,
    DrawerWithHeader,
    Editor,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    ServicesIcon,
    Stack,
    TextField,
} from 'convertupleads-theme';
import PersonalizedPopover from '../../dataArchiveRemoval/popover/PersonalizedPopover';
interface Props {
    open: boolean;
    onClose: () => void;
}
const AddNewFollowup: React.FC<Props> = ({ open, onClose }) => {
    const [personalizedPopover, setPersonalizedPopover] = React.useState<HTMLSpanElement | SVGSVGElement | null>(null);

    const handlePersonalizedPopover = (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>
    ) => {
        setPersonalizedPopover(event.currentTarget);
    };
    const handleClose = () => {
        setPersonalizedPopover(null);
    };
    const openPersonalizedPopover = Boolean(personalizedPopover);
    const personalizedPopoverId = openPersonalizedPopover ? 'simple-popover' : undefined;

    return (
        <DrawerWithHeader open={open} anchor={'right'} header={'Add Followup Setting'} width={600} onClose={onClose}>
            <Stack p={3} spacing={3} sx={{ maxHeight: 'calc(100vh - 62px)', overflowY: 'auto' }}>
                <Stack>
                    <InputLabel>Gateway *</InputLabel>
                    <Select value={10} onChange={() => {}} size='small' fullWidth IconComponent={ChevronDownIcon}>
                        <MenuItem value={10}>Zendirect</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Stack>

                <Stack>
                    <InputLabel>Error Type*</InputLabel>
                    <Select value={10} onChange={() => {}} size='small' fullWidth IconComponent={ChevronDownIcon}>
                        <MenuItem value={10}>Zendirect</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Stack>

                <Stack>
                    <InputLabel>Followup Limit *</InputLabel>
                    <Select value={10} onChange={() => {}} size='small' fullWidth IconComponent={ChevronDownIcon}>
                        <MenuItem value={10}>Select a follow-up limit</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Stack>

                <TextField
                    placeholder={'www.example.com'}
                    label={'Target URL'}
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>https://</InputAdornment>,
                    }}
                />

                <TextField size='small' placeholder='' label='Target URL Text' />

                <Stack direction={'row'} gap={2} alignItems={'flex-end'}>
                    <TextField size='small' fullWidth value={'[[user_full_name]] your credential expire'} label='Subject *' />
                    <Button
                        variant={'outlined'}
                        color={'inherit'}
                        startIcon={<ServicesIcon sx={{ fontSize: 16, color: 'text.secondary' }} />}
                        endIcon={<ChevronDownIcon sx={{ fontSize: 16, color: 'action.active' }} />}
                        sx={{ color: 'text.secondary', borderColor: 'other.divider', bgcolor: 'grey.50', ml: 'auto' }}
                        onClick={handlePersonalizedPopover}
                    >
                        Personalise
                    </Button>
                </Stack>

                <Stack>
                    <InputLabel>Email Body*</InputLabel>
                    <Box>
                        <Editor
                            value={
                                'Dear [[user_full_name]], your Zendirect credential expired or inactive please reactivate the account to get email service , otherwise email will get fail till then.'
                            }
                        />
                    </Box>
                </Stack>

                <Stack direction={'row'} gap={2}>
                    <Button
                        variant={'outlined'}
                        color={'inherit'}
                        startIcon={<ServicesIcon sx={{ fontSize: 16, color: 'text.secondary' }} />}
                        endIcon={<ChevronDownIcon sx={{ fontSize: 16, color: 'action.active' }} />}
                        sx={{ color: 'text.secondary', borderColor: 'other.divider', bgcolor: 'grey.50' }}
                        onClick={handlePersonalizedPopover}
                    >
                        Personalise
                    </Button>

                    <Button
                        variant={'outlined'}
                        color={'inherit'}
                        sx={{ color: 'text.secondary', borderColor: 'other.divider', bgcolor: 'grey.50' }}
                    >
                        <ServicesIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    </Button>
                </Stack>
            </Stack>

            <Stack mt={'auto'}>
                <Divider light />
                <Stack px={3} py={2} direction={'row'} justifyContent={'flex-end'} spacing={2}>
                    <Button variant='tonal' color='inherit' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary'>
                        Submit
                    </Button>
                </Stack>
            </Stack>

            <PersonalizedPopover
                id={personalizedPopoverId}
                open={openPersonalizedPopover}
                status={personalizedPopover}
                onClose={handleClose}
            />
        </DrawerWithHeader>
    );
};

export default AddNewFollowup;
