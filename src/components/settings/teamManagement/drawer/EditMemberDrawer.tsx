import React from 'react';

import {
    AddIcon,
    Box,
    Button,
    ChevronDownIcon,
    Divider,
    DrawerWithHeader,
    Editor,
    FileUploadWithPreview,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from 'convertupleads-theme';

interface Props {
    open: boolean;
    onClose: () => void;
}

const EditMemberDrawer: React.FC<Props> = ({ open, onClose }) => {
    return (
        <DrawerWithHeader open={open} anchor={'right'} header={'Edit Member'} width={600} onClose={onClose}>
            <Stack p={3} sx={{ maxHeight: 'calc(100vh - 62px)', overflowY: 'auto' }}>
                <Stack mb={2}>
                    <Typography variant='overline' color={'text.tertiary'}>
                        User Profile
                    </Typography>

                    <FileUploadWithPreview /> 
                </Stack>

                <Grid container spacing={2} mb={2}>
                    <Grid item md={6}>
                        <TextField placeholder='' label='First name *' fullWidth />
                    </Grid>
                    <Grid item md={6}>
                        <TextField placeholder='' label='Last name *' fullWidth />
                    </Grid>
                    <Grid item md={6}>
                        <TextField placeholder='' label='Email' fullWidth />
                    </Grid>
                    <Grid item md={6}>
                        <TextField placeholder='' label='Number *' fullWidth />
                    </Grid>
                </Grid>

                <Stack spacing={1} my={3}>
                    <Stack>
                        <InputLabel>Roles & Permissions</InputLabel>
                        <Select value={10} onChange={() => { }} size='small' fullWidth IconComponent={ChevronDownIcon}>
                            <MenuItem value={10}>User</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Stack>

                    <Stack alignItems={'flex-start'}>
                        <Button variant='text' startIcon={<AddIcon />}>
                            Add New roles
                        </Button>
                    </Stack>
                </Stack>

                <Stack mb={2}>
                    <Typography variant='overline' color={'text.tertiary'} mb={1.5}>
                        Email Signature
                    </Typography>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox size='small' />} label='Enable signature on all outgoing messages' />
                        <FormControlLabel
                            control={<Checkbox size='small' />}
                            label='Include this signature before quoted text in replies'
                        />
                    </FormGroup>
                </Stack>

                <Stack>
                    <Box>
                        <Editor />
                    </Box>
                </Stack>
            </Stack>

            <Stack mt={'auto'}>
                <Divider light />
                <Stack px={3} py={2} direction={'row'} justifyContent={'flex-end'} spacing={2}>
                    <Button variant='tonal' color='inherit' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary'>
                        Update Member
                    </Button>
                </Stack>
            </Stack>
        </DrawerWithHeader>
    );
};

export default EditMemberDrawer;
