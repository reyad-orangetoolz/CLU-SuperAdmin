import { CircularProgress, Stack } from 'convertupleads-theme';

const LoadingFallback = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ height: '80vh' }}>
            <CircularProgress color='inherit' />
        </Stack>
    );
};

export default LoadingFallback;
