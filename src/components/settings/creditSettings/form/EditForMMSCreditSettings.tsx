import { Box, Button, FormControl, FormHelperText, Stack, TextField } from 'convertupleads-theme';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { creditSettingPattern } from '../../../../helpers/validation/creditSettingPattern';
import { CREDIT_SETTING_MODAL_TYPE } from '../../../../helpers/constant/coreConstants';
import { IFormValues } from '../../../../interface/credit-setting.interface';

const EditForMMSCreditSettings: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
    const {
        handleSubmit,
        control
    } = useForm<IFormValues>();

    // handle submit the form
    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data);
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                control={control}
                name="cost"
                rules={creditSettingPattern.cost}
                defaultValue={CREDIT_SETTING_MODAL_TYPE.MMS.credit}
                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                    <FormControl sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                        <TextField
                            label='Credit Cost Rate'
                            fullWidth
                            value={value}
                            onChange={onChange}
                            error={!!(invalid && error?.message)}
                        />
                        <FormHelperText>{invalid && error?.message}</FormHelperText>
                    </FormControl>
                )}
            />

            {/* button of modal */}
            <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                <Button color={'inherit'} variant={'tonal'} onClick={handleClose}>
                    Cancel
                </Button>
                <Button type='submit' onClick={() => { }}>Save</Button>
            </Stack>
        </Box>
    )
}

export default EditForMMSCreditSettings
