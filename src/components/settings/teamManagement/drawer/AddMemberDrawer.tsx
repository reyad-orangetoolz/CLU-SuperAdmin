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
    FormControl,
    FormHelperText,
} from 'convertupleads-theme';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IFormValues, IProps, IUserRole } from '../../../../interface/teamManagement-setting.interface';
import { API_USER_ROLE } from '../../../../helpers/apiResponse/teamManagementSettings/teamManagementSettings';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../state/store';
import { attemptCreateRoleOpen } from '../../../../state/features/settings/teamMember/teamSlice';
import { teamManagementSettingPattern } from '../../../../helpers/validation/teamManagementSettingPatter';

const AddMemberDrawer: React.FC<IProps> = ({ open, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();

    const {
        handleSubmit,
        control
    } = useForm<IFormValues>();

    const handleNewRole = () => {
        onClose();
        dispatch(attemptCreateRoleOpen());
    }

    // handle submit the form
    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data);
    }

    return (
        <DrawerWithHeader open={open} anchor={'right'} header={'Add Member'} width={600} onClose={onClose}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stack p={3} sx={{ maxHeight: 'calc(100vh - 62px)', overflowY: 'auto' }}>
                    <Stack mb={2}>
                        <Typography variant='overline' color={'text.tertiary'}>
                            User Profile
                        </Typography>
                        <Controller
                            control={control}
                            name="profileLogo"
                            // rules={}
                            render={({ fieldState: { invalid, error } }) => (
                                <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>

                                    {/* here, nothing can do with this component, 
                                    only just preview the image while upload a file */}
                                    <FileUploadWithPreview />


                                    <FormHelperText>{invalid && error?.message}</FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Stack>

                    <Grid container spacing={2} mb={2}>
                        <Grid item md={6}>
                            <Controller
                                control={control}
                                name="firstName"
                                rules={teamManagementSettingPattern.name}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <TextField
                                            value={value}
                                            onChange={onChange}
                                            label='First name *'
                                            fullWidth
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <Controller
                                control={control}
                                name="lastName"
                                rules={teamManagementSettingPattern.name}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <TextField
                                            value={value}
                                            onChange={onChange}
                                            label='Last name *'
                                            fullWidth
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <Controller
                                control={control}
                                name="email"
                                rules={teamManagementSettingPattern.email}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <TextField
                                            value={value}
                                            onChange={onChange}
                                            label='Email'
                                            fullWidth
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <Controller
                                control={control}
                                name="number"
                                rules={teamManagementSettingPattern.number}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <TextField
                                            value={value}
                                            onChange={onChange}
                                            label='Number *'
                                            fullWidth
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Grid>
                    </Grid>

                    <Stack spacing={1} my={3}>
                        <Stack>
                            <InputLabel>Roles & Permissions</InputLabel>
                            <Controller
                                control={control}
                                name="role"
                                rules={{ required: 'Role must not be empty!' }}
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <Select value={value} onChange={onChange} size='small' fullWidth IconComponent={ChevronDownIcon}>
                                            {
                                                API_USER_ROLE.map((data: IUserRole) => {
                                                    return (
                                                        <MenuItem value={data.id}>{data.role}</MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Stack>

                        <Stack alignItems={'flex-start'}>
                            <Button variant='text' startIcon={<AddIcon />} onClick={handleNewRole}>
                                Add New roles
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack mb={2}>
                        <Typography variant='overline' color={'text.tertiary'} mb={1.5}>
                            Email Signature
                        </Typography>

                        <FormGroup>
                            <Controller
                                control={control}
                                name="enableSignature"
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <FormControlLabel
                                            value={value}
                                            onChange={onChange}
                                            control={<Checkbox size='small' />}
                                            label='Enable signature on all outgoing messages'
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />

                            <Controller
                                control={control}
                                name="includeSignature"
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                                        <FormControlLabel
                                            value={value}
                                            onChange={onChange}
                                            control={<Checkbox size='small' />}
                                            label='Include this signature before quoted text in replies'
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </FormGroup>
                    </Stack>

                    <Stack>
                        <Box>
                            <Controller
                                control={control}
                                name='emailSignature'
                                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                                    <FormControl fullWidth error={!!(invalid && error?.message)}>
                                        <Editor
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Box>
                    </Stack>
                </Stack>

                <Stack mt={'auto'}>
                    <Divider light />
                    <Stack px={3} py={2} direction={'row'} justifyContent={'flex-end'} spacing={2}>
                        <Button variant='tonal' color='inherit' onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>
                            Add Member
                        </Button>
                    </Stack>
                </Stack>
            </Box>

        </DrawerWithHeader>
    );
};

export default AddMemberDrawer;
