import React from 'react';
import {
    ArrowRightIcon,
    Box,
    CollabIcon,
    Divider,
    Grid,
    IconButton,
    InboxIcon,
    Stack,
    Typography,
    UserIcon,
    WebIcon,
} from 'convertupleads-theme';

const StatusCardList: React.FC = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} spacing={4}>
                        <Stack p={2.5}>
                            <UserIcon sx={{ fontSize: 25 }} color={'primary'} />
                        </Stack>

                        <Stack p={3} pr={2}>
                            <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                Today{"'"}s Agency
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} gap={0.8}>
                                    <Typography variant='h4' color={'text.primary'}>
                                        20
                                    </Typography>
                                    <Typography variant='h6' color={'text.tertiary'}>
                                        {' '}
                                        / 100
                                    </Typography>
                                </Stack>

                                <IconButton>
                                    <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} spacing={4}>
                        <Stack p={2.5}>
                            <CollabIcon sx={{ fontSize: 25 }} color={'primary'} />
                        </Stack>

                        <Stack p={3} pr={2}>
                            <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                Today{"'"}s User
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} gap={0.8}>
                                    <Typography variant='h4' color={'text.primary'}>
                                        6
                                    </Typography>
                                    <Typography variant='h6' color={'text.tertiary'}>
                                        {' '}
                                        / 100
                                    </Typography>
                                </Stack>

                                <IconButton>
                                    <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} spacing={4}>
                        <Stack p={2.5}>
                            <InboxIcon sx={{ fontSize: 25 }} color={'primary'} />
                        </Stack>

                        <Stack p={3} pr={2}>
                            <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                Today{"'"}s Sent
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} gap={0.8}>
                                    <Typography variant='h4' color={'text.primary'}>
                                        65,450
                                    </Typography>
                                </Stack>

                                <IconButton>
                                    <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} spacing={4}>
                        <Stack p={2.5}>
                            <InboxIcon sx={{ fontSize: 25 }} color={'primary'} />
                        </Stack>

                        <Stack p={3} pr={2}>
                            <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                Today{"'"}s Queue
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} gap={0.8}>
                                    <Typography variant='h4' color={'text.primary'}>
                                        650
                                    </Typography>
                                </Stack>

                                <IconButton>
                                    <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} spacing={4}>
                        <Stack p={2.5}>
                            <InboxIcon sx={{ fontSize: 25 }} color={'primary'} />
                        </Stack>

                        <Stack p={3} pr={2}>
                            <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                Jobs
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} gap={0.8}>
                                    <Typography variant='h4' color={'text.primary'}>
                                        102
                                    </Typography>
                                </Stack>

                                <IconButton>
                                    <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} spacing={4}>
                        <Stack p={2.5}>
                            <InboxIcon sx={{ fontSize: 25 }} color={'primary'} />
                        </Stack>

                        <Stack p={3} pr={2}>
                            <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                Failed Jobs
                            </Typography>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} gap={0.8}>
                                    <Typography variant='h4' color={'error'}>
                                        0
                                    </Typography>
                                </Stack>

                                <IconButton>
                                    <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Stack bgcolor={'common.white'} borderRadius={'12.5px'} height={'100%'}>
                        <Stack p={1.5} pl={3}>
                            <Typography variant='h6' color={'text.primary'}>
                                Custom Domain
                            </Typography>
                        </Stack>
                        <Divider light />

                        <Stack direction={{ lg: 'row' }} height={'100%'}>
                            <Stack
                                p={3}
                                pr={2}
                                flex={1}
                                sx={{ borderRight: '1px solid', borderColor: { sm: 'transparent', lg: 'other.divider' } }}
                                height={'100%'}
                                justifyContent={'flex-end'}
                            >
                                <Stack spacing={0.8}>
                                    <WebIcon sx={{ fontSize: 20, color: 'text.tertiary' }} />
                                    <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                        Active Custom Domain
                                    </Typography>
                                </Stack>

                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant='h4' color={'text.primary'}>
                                        32,480
                                    </Typography>

                                    <IconButton>
                                        <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                    </IconButton>
                                </Stack>
                            </Stack>

                            <Stack p={3} pr={2} flex={1} height={'100%'} justifyContent={'flex-end'}>
                                <Stack spacing={0.8}>
                                    <WebIcon sx={{ fontSize: 20, color: 'text.tertiary' }} />
                                    <Typography variant={'body1'} color={'text.tertiary'} fontWeight={600}>
                                        Pending Custom Domain
                                    </Typography>
                                </Stack>

                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography variant='h4' color={'warning.main'}>
                                        380
                                    </Typography>

                                    <IconButton>
                                        <ArrowRightIcon sx={{ fontSize: 24 }} color={'primary'} />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StatusCardList;
