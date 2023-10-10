import React, { useState } from 'react';
import {
    Button,
    ChevronUpDownIcon,
    Divider,
    InputLabel,
    MenuItem,
    ModalWithHeader,
    Select,
    Stack,
    TextFieldWithSelect,
    FormControlLabel,
    Switch,
    FormControl,
    FormHelperText,
} from 'convertupleads-theme';
import { BASIC_SETTING_MODAL_TYPE, SELECT_INPUT_DATA } from '../../../../helpers/constant/coreConstants';
import { Controller, useForm } from 'react-hook-form';
import { IFormValues } from '../../../../interface/basic-setting.interface';

interface Props {
    title?: string;
    open: boolean;
    onClose: () => void;
    type: number;
}

const EditBasicSettingModal: React.FC<Props> = ({ title, open, onClose, type }) => {
    const [countryValue, setCountryValue] = useState<number>(0);

    const {
        handleSubmit,
        control
    } = useForm<IFormValues>();

    const handleCountryValue = (value: string) => {
        SELECT_INPUT_DATA.map((data, index) => {
            if (data.value == value)
                setCountryValue(index);
        })
    }

    let content = null;

    if (type === BASIC_SETTING_MODAL_TYPE.EDIT_CREDIT) {
        content = (
            <>
                <InputLabel>Value </InputLabel>

                <Select labelId='small-select' value={5} onChange={() => { }} size='small' IconComponent={ChevronUpDownIcon}>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </>
        );
        title = 'Minimum credit needed for phone call features';
    }

    if (type === BASIC_SETTING_MODAL_TYPE.SMS_FORWARD) {
        content = (
            <TextFieldWithSelect
                options={SELECT_INPUT_DATA}
                label={'Forward Notification'}
                type={'number'}
                onChangeOption={(value) => {
                    console.log(value);
                }}
            />
        );
        title = 'SMS forward notification';
    }

    if (type === BASIC_SETTING_MODAL_TYPE.CALL_FORWARD) {
        content = (
            <>
                {/* <Controller
                    control={control}
                    name="phone"
                    rules={{ required: 'Role must not be empty!' }}
                    render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                        <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                            <TextFieldWithSelect
                                
                                options={SELECT_INPUT_DATA}
                                selected={SELECT_INPUT_DATA[countryValue]}
                                label={'Forward Notification'}
                                type={'number'}
                                onChangeOption={(value) => {
                                    handleCountryValue(value);
                                }}
                            />
                            <FormHelperText>{invalid && error?.message}</FormHelperText>
                        </FormControl>
                    )}
                /> */}
                <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                    <Button color={'inherit'} variant={'tonal'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }}>Save</Button>
                </Stack>
            </>
        );
        title = 'Call forward email notification';
    }

    if (type === BASIC_SETTING_MODAL_TYPE.NOTIFICATION_SENDER) {
        content = (
            <>
                <InputLabel>Value </InputLabel>

                <FormControlLabel control={<Switch variant={'onOff'} color={'primary'} defaultChecked />} label='' />
            </>
        );
        title = 'Notification Sender';
    }

    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={1}>
                    {content}
                </Stack>

                <Divider light />
                {/* <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                    <Button color={'inherit'} variant={'tonal'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }}>Save</Button>
                </Stack> */}
            </>
        </ModalWithHeader>
    );
};

export default EditBasicSettingModal;
