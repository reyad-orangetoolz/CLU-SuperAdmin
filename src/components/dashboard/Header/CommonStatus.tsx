import React from 'react';
import { ArrowRightIcon, Box, Button, InboxIcon, Stack, Typography, UserIcon, WebIcon, styled } from 'convertupleads-theme';

const IntervalBetweenOptions = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(0.5),
    gap: theme.spacing(0.5),
    backgroundColor: theme.palette.grey[50],
    borderRadius: '8px',
    '& .campEachInterval': {
        flex: 1,
        textAlign: 'center',
        padding: theme.spacing(0.75),
        fontSize: 14,
        fontWeight: 500,
        color: theme.palette.text.tertiary,
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
        },
        '&.intervalSelected': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary,
        },
    },
}));

const selected = true;

const CommonStatus: React.FC = () => {
    return (
        <Stack direction={{ lg: 'row' }} alignItems={'center'} justifyContent={'space-between'} gap={2}>
            <Stack direction={'row'} alignItems={'center'} spacing={1.5} flex={1}>
                <Typography variant='subtitle1' color={'text.secondary'} fontSize={13}>
                    You have:
                </Typography>
                <Button
                    variant={'tonal'}
                    color='secondary'
                    size={'small'}
                    rounded
                    startIcon={<InboxIcon sx={{ fontSize: 16 }} />}
                    endIcon={<ArrowRightIcon sx={{ fontSize: 16 }} />}
                >
                    65450 Today{"'"}s Sent
                </Button>

                <Button
                    variant={'tonal'}
                    color='success'
                    size={'small'}
                    rounded
                    startIcon={<UserIcon sx={{ fontSize: 16 }} />}
                    endIcon={<ArrowRightIcon sx={{ fontSize: 16 }} />}
                >
                    20 Today{"'"}s Agency
                </Button>

                <Button
                    variant={'tonal'}
                    color='warning'
                    size={'small'}
                    rounded
                    startIcon={<WebIcon sx={{ fontSize: 16 }} />}
                    endIcon={<ArrowRightIcon sx={{ fontSize: 16 }} />}
                >
                    380 Pending Custom Domain
                </Button>
            </Stack>

            <IntervalBetweenOptions minWidth={425}>
                <Box className={`campEachInterval ${selected ? 'intervalSelected' : ''}`}>Today</Box>
                <Box className={'campEachInterval'}>7 Days</Box>
                <Box className={'campEachInterval'}>1 Month</Box>
                <Box className={'campEachInterval'}>12 Months</Box>
                <Box className={'campEachInterval'}>All time</Box>
            </IntervalBetweenOptions>
        </Stack>
    );
};

export default CommonStatus;
