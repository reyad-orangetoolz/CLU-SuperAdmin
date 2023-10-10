import React from 'react';

import {
    Box,
    Button,
    Paper,
    Stack,
    Tab,
    Tabs,
    TextField,
    ChevronDownIcon,
    ServicesIcon,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Editor,
} from 'convertupleads-theme';
import TopNav from '../../../common/topNav/TopNav';
import PersonalizedPopover from './popover/PersonalizedPopover';

interface CustomTabPanelProps {
    value: number;
    index: number;
    children?: React.ReactNode;
}

function CustomTabPanel(props: CustomTabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box role='tabpanel' hidden={value !== index} {...other}>
            {value === index && <Box>{children}</Box>}
        </Box>
    );
}

const DataArchiveRemoval: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const [personalizedPopover, setPersonalizedPopover] = React.useState<HTMLSpanElement | SVGSVGElement | null>(null);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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

    const TabData = () => (
        <Stack p={3} maxWidth={638} spacing={3}>
            <TextField size='small' placeholder='30' label='Data archive will start if user being inactive for' />

            <FormControl>
                <InputLabel>How many time inactive user will get notification</InputLabel>
                <Select value={10} onChange={() => {}} size='small' fullWidth IconComponent={ChevronDownIcon}>
                    <MenuItem value={10}>4</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <TextField size='small' placeholder='15' label='Notification interval between days' />
            <TextField size='small' placeholder='John@gmail.com' label='Email Sender' />

            <Stack direction={'row'} gap={2} alignItems={'flex-end'}>
                <TextField size='small' fullWidth placeholder='John@gmail.com' label='Email Sender' />
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
                <InputLabel>Email Subject</InputLabel>
                <Editor />
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

            <Stack pt={3} pb={2} direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <Button variant='tonal' color='inherit'>
                    Cancel
                </Button>
                <Button variant='contained' color='primary'>
                    Save Data Archiving Policy
                </Button>
            </Stack>

            <PersonalizedPopover
                id={personalizedPopoverId}
                open={openPersonalizedPopover}
                status={personalizedPopover}
                onClose={handleClose}
            />
        </Stack>
    );

    return (
        <Stack sx={{ flex: 1, overflowY: 'auto', py: 2, px: 3 }} spacing={3}>
            <TopNav title='Data Archiving & Removal Settings' secondRoute='Data Archive & Removal' />

            <Paper elevation={0} sx={{ height: 'calc(100vh - 120px)' }}>
                <Stack px={3} pt={2}>
                    <Tabs value={value} onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'other.divider' }}>
                        <Tab label='Data Archiving' />
                        <Tab label='Data Removal' />
                    </Tabs>
                </Stack>

                <CustomTabPanel value={value} index={0}>
                    {TabData()}
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {TabData()}
                </CustomTabPanel>
            </Paper>
        </Stack>
    );
};

export default DataArchiveRemoval;
