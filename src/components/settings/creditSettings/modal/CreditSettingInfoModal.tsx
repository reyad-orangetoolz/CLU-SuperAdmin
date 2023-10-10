import { Divider, ModalWithHeader, Stack } from 'convertupleads-theme';
import React from 'react'
import { CREDIT_SETTING_MODAL_TYPE } from '../../../../helpers/constant/coreConstants';
import { IPropsModal } from '../../../../interface/credit-setting.interface';

const contentOfInfo = {
    SMS: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum, voluptatibus iure modi eos commodi? Illum, obcaecati. Libero obcaecati illum odit eius veritatis porro veniam tempore, unde exercitationem recusandae laborum!',
    MMS: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum, voluptatibus iure modi eos commodi? Illum, obcaecati. Libero obcaecati illum odit eius veritatis porro veniam tempore, unde exercitationem recusandae laborum!',
    RVM: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis earum, voluptatibus iure modi eos commodi? Illum, obcaecati. Libero obcaecati illum odit eius veritatis porro veniam tempore, unde exercitationem recusandae laborum!'
}

const CreditSettingInfoModal: React.FC<IPropsModal> = ({ title, open, onClose, type }) => {
    let content: string = '';
    if (type === CREDIT_SETTING_MODAL_TYPE.SMS.type) {
        content = contentOfInfo.SMS;
        title = CREDIT_SETTING_MODAL_TYPE.SMS.type;
    } else if (type === CREDIT_SETTING_MODAL_TYPE.MMS.type) {
        content = contentOfInfo.MMS;
        title = CREDIT_SETTING_MODAL_TYPE.MMS.type;
    } else if (type === CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type) {
        content = contentOfInfo.RVM;
        title = CREDIT_SETTING_MODAL_TYPE.RINGLESS_VOICE_MAIL.type;
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
