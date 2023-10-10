import { EditIcon, IconButton, Stack, Typography } from 'convertupleads-theme';
import React from 'react';

const WelcomeUser: React.FC = () => {
    return (
        <Stack>
            <Typography variant='h5' color={'text/primary'}>
                Welcome back, Bruce! 👋
            </Typography>

            <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
                <Typography>Tuesday, 24 September, 2023</Typography>
                <IconButton size='small'>
                    <EditIcon color='primary' />
                </IconButton>
            </Stack>
        </Stack>
    );
};

export default WelcomeUser;
