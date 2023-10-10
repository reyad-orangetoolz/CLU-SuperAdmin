import React from 'react';

import {
    Accordion,
    AccordionSummary,
    Button,
    ChevronDownIcon,
    Divider,
    DrawerWithHeader,
    Stack,
    Typography,
    Switch,
    AccordionDetails,
    Paper,
    Radio,
    InfoCircleIcon,
} from 'convertupleads-theme';

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateRoleDrawer: React.FC<Props> = ({ open, onClose }) => {
    return (
        <DrawerWithHeader open={open} anchor={'right'} header={'Create Role'} width={600} onClose={onClose}>
            <Stack p={3} spacing={2} sx={{ maxHeight: 'calc(100vh - 62px)', overflowY: 'auto' }}>
                <Paper variant='outlined' elevation={0}>
                    <Accordion sx={{ border: 0 }}>
                        <AccordionSummary
                            expandIcon={<ChevronDownIcon fontSize='small' color={'text.tertiary'} />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    justifyContent: 'space-between',
                                },
                            }}
                        >
                            <Typography variant={'button'} color={'text.secondary'} sx={{ textTransform: 'normal' }}>
                                Inbox
                            </Typography>
                            <Switch variant={'onOff'} color={'primary'} defaultChecked />
                        </AccordionSummary>

                        <AccordionDetails sx={{ borderTop: '1px solid ', borderColor: 'other.divider', pt: 2 }}>
                            <Stack direction={'row'} justifyContent={'space-between'} mb={2} pr={0.5}>
                                <Typography variant='body2' color={'text.tertiary'}>
                                    Module Name
                                </Typography>
                                <Stack direction={'row'} spacing={3}>
                                    <Typography variant='body2' color={'text.tertiary'}>
                                        View
                                    </Typography>
                                    <Typography variant='body2' color={'text.tertiary'}>
                                        Edit
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                    <Typography variant='body2' color={'text.tertiary'}>
                                        View other users conversations
                                    </Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'text.tertiary' }} />
                                </Stack>

                                <Stack direction={'row'} spacing={1.5}>
                                    <Radio color='primary' size='small' />
                                    <Radio checked={true} color='primary' size='small' />
                                </Stack>
                            </Stack>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                    <Typography variant='body2' color={'text.tertiary'}>
                                        Delete other users conversations
                                    </Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'text.tertiary' }} />
                                </Stack>

                                <Stack direction={'row'} spacing={1.5}>
                                    <Radio color='primary' size='small' />
                                    <Radio checked={true} color='primary' size='small' />
                                </Stack>
                            </Stack>

                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                    <Typography variant='body2' color={'text.tertiary'}>
                                        Send messages to other users contacts
                                    </Typography>
                                    <InfoCircleIcon sx={{ fontSize: 16, color: 'text.tertiary' }} />
                                </Stack>

                                <Stack direction={'row'} spacing={1.5}>
                                    <Radio color='primary' size='small' />
                                    <Radio checked={true} color='primary' size='small' />
                                </Stack>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Paper>

                <Paper variant='outlined' elevation={0}>
                    <Accordion sx={{ border: 0 }}>
                        <AccordionSummary
                            expandIcon={<ChevronDownIcon fontSize='small' color={'text.tertiary'} />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    justifyContent: 'space-between',
                                },
                            }}
                        >
                            <Typography variant={'button'} color={'text.secondary'} sx={{ textTransform: 'normal' }}>
                                Deals
                            </Typography>
                            <Switch variant={'onOff'} color={'primary'} defaultChecked />
                        </AccordionSummary>

                        <AccordionDetails sx={{ borderTop: '1px solid ', borderColor: 'other.divider', pt: 2 }}></AccordionDetails>
                    </Accordion>
                </Paper>

                <Paper variant='outlined' elevation={0}>
                    <Accordion sx={{ border: 0 }}>
                        <AccordionSummary
                            expandIcon={<ChevronDownIcon fontSize='small' color={'text.tertiary'} />}
                            aria-controls='panel1a-content'
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    justifyContent: 'space-between',
                                },
                            }}
                        >
                            <Typography variant={'button'} color={'text.secondary'} sx={{ textTransform: 'normal' }}>
                                Calendar
                            </Typography>
                            <Switch variant={'onOff'} color={'primary'} />
                        </AccordionSummary>

                        <AccordionDetails sx={{ borderTop: '1px solid ', borderColor: 'other.divider', pt: 2 }}></AccordionDetails>
                    </Accordion>
                </Paper>
            </Stack>

            <Stack mt={'auto'}>
                <Divider light />
                <Stack px={3} py={2} direction={'row'} justifyContent={'flex-end'} spacing={2}>
                    <Button variant='tonal' color='inherit' onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant='contained' color='primary'>
                        Create Role
                    </Button>
                </Stack>
            </Stack>
        </DrawerWithHeader>
    );
};

export default CreateRoleDrawer;
