import { Divider, ModalWithHeader, Stack } from 'convertupleads-theme';
import React from 'react'
import { CREDIT_TYPE } from '../../../../helpers/constant/coreConstants';

interface Props {
    title?: string;
    open: boolean;
    onClose: () => void;
    type: string;
}

const contentOfInfo = {
    SMS: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum, voluptatibus iure modi eos commodi? Illum, obcaecati. Libero obcaecati illum odit eius veritatis porro veniam tempore, unde exercitationem recusandae laborum!',
    MMS: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum, voluptatibus iure modi eos commodi? Illum, obcaecati. Libero obcaecati illum odit eius veritatis porro veniam tempore, unde exercitationem recusandae laborum!',
    RVM: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum, voluptatibus iure modi eos commodi? Illum, obcaecati. Libero obcaecati illum odit eius veritatis porro veniam tempore, unde exercitationem recusandae laborum!'
}

const CreditSettingInfoModal: React.FC<Props> = ({ title, open, onClose, type }) => {
    let content: string = '';
    if (type === CREDIT_TYPE.SMS) {
        content = contentOfInfo.SMS;
        title = CREDIT_TYPE.SMS;
    } else if (type === CREDIT_TYPE.MMS) {
        content = contentOfInfo.MMS;
        title = CREDIT_TYPE.MMS;
    } else if (type === CREDIT_TYPE.RINGLESS_VOICE_MAIL) {
        content = contentOfInfo.RVM;
        title = CREDIT_TYPE.RINGLESS_VOICE_MAIL;
    }

    return (
        <ModalWithHeader width={600} open={open} onClose={onClose} title={title}>
            <>
                <Stack p={3} spacing={1}>
                    {content}
                </Stack>

                <Divider light />
            </>
        </ModalWithHeader>
    );
}

export default CreditSettingInfoModal
