import React from 'react';

import { Avatar, Button, Divider, FileUpload, ModalWithHeader, Stack, TextField, Typography } from 'convertupleads-theme';

interface Props {
    title?: string;
    open: boolean;
    onClose: () => void;
}

const EditCampaignCategorySettingsModal: React.FC<Props> = ({ title = 'Edit Form Category', open, onClose }) => {
    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={2}>
                    <TextField placeholder='' label='Category Name *' />

                    <Stack spacing={1}>
                        <Typography variant='body2' fontWeight={500} color={'text.secondary'}>
                            Avatar
                        </Typography>
                        <FileUpload status='loading' variant='linear' />
                    </Stack>

                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Avatar size='small' variant='square'>
                            O
                        </Avatar>
                        <Typography variant='body2' color={'text.secondary'}>
                            Orangetoolz.PNG
                        </Typography>
                    </Stack>
                </Stack>

                <Divider light />
                <Stack direction={'row'} spacing={2} justifyContent={'flex-end'} p={2}>
                    <Button color={'inherit'} variant={'tonal'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={() => {}}>Update Category</Button>
                </Stack>
            </>
        </ModalWithHeader>
    );
};

export default EditCampaignCategorySettingsModal;
