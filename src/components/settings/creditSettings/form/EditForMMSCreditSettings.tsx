import { Box, Button, FormControl, FormHelperText, Stack, TextField } from 'convertupleads-theme';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FormValues {
    cost: number;
    costMedia: number;
}

const EditForMMSCreditSettings = () => {
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
            <Controller
                control={control}
                name="costMedia"
                render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
                    <FormControl size="small" sx={{ mb: 2 }} fullWidth error={!!(invalid && error?.message)}>
                        <TextField
                            label='Credit Cost Rate for media file'
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

export default EditForMMSCreditSettings
