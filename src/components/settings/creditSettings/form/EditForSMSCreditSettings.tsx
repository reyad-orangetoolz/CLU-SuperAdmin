import { Box, Button, FormControl, FormHelperText, InputAdornment, Stack, TextField, ErrorFilledIcon } from 'convertupleads-theme';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { creditSettingsPattern } from '../../../../helpers/validation/creditSettingsPattern';

interface FormValues {
    cost: number;
}

const EditForSMSCreditSettings = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormValues>();

    console.log("=====errors====", errors);

    const onSubmit: SubmitHandler<FormValues> = (data) => {
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
                rules={creditSettingsPattern.cost}
                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                    <FormControl size="small" sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
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
            <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                <Button type='submit' onClick={() => { }}>Save</Button>
            </Stack>
        </Box>
    )
}

export default EditForSMSCreditSettings;
