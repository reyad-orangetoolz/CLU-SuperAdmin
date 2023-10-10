import React from 'react';

import {
    Button,
    Divider,
    FormControl,
    FormHelperText,
    InputAdornment,
    ModalWithHeader,
    Stack,
    TextField,
    TextFieldWithSelect,
} from 'convertupleads-theme';
import { SELECT_INPUT_DATA } from '../../../helpers/constant/coreConstants';

interface Props {
    title?: string;
    open: boolean;
    onClose: () => void;
}

const AddAgencyModal: React.FC<Props> = ({ title = 'Add Agency Admin', open, onClose }) => {
    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={2}>
                    <TextField placeholder='' label='Full Name *' />

                    <TextField placeholder='' label='Email *' />

                    <TextFieldWithSelect options={SELECT_INPUT_DATA} label={'Phone Number'} type={'number'} fullWidth />

                    <FormControl variant='standard'>
                        <TextField
                            label='Sub Domain Prefix'
                            placeholder={'www.example.com'}
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>https://</InputAdornment>,
                            }}
                        />
                        <FormHelperText>
                            Include only letters a to z, numbers 0-9, and hyphens (-). Hyphens cannot be the first or last.
                        </FormHelperText>
                    </FormControl>
                </Stack>

                <Divider light />
                <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                    <Button color={'inherit'} variant={'tonal'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={() => {}}>Add Admin</Button>
                </Stack>
            </>
        </ModalWithHeader>
    );
};

export default AddAgencyModal;
