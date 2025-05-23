import React, {useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@src/userinterface/pattern/dialog/BaseDialog";
import {css} from "styled-components";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Spacer from "@src/userinterface/component/Spacer";
import Text from "@src/userinterface/component/Text";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import Button from "@src/userinterface/component/Button";
import weddingApi from "@src/infrastructure/network/api/wedding-api";
import GuestType, {guestTypeList, guestTypeMap} from "@src/infrastructure/network/enumeration/GuestType";
import Rsvp from "@src/infrastructure/network/value/Rsvp";
import Dialog from "@src/userinterface/pattern/dialog/Dialog";
import SegmentedButton from "@src/userinterface/component/SegmentedButton";
import Divider from "@src/userinterface/component/Divider";
import Input from "@src/userinterface/component/Input";
import {formatPhone} from "@src/shared/format-util";

interface CreateRsvpDialogProps {
    url: string;
    rsvp: Rsvp;
    dismiss: () => void;
}

function CreateRsvpDialog(
    {
        url,
        rsvp,
        dismiss
    }: CreateRsvpDialogProps
) {
    const [guestType, setGuestType] = useState(0);
    const [isAttend, setIsAttend] = useState(0);
    const [isMeal, setIsMeal] = useState(0);
    const [isBus, setIsBus] = useState(0);
    const [showConfirmCreateRsvpDialog, setShowConfirmCreateRsvpDialog] = useState(false);

    const [guestName, setGuestName] = useState('');
    const [guestPhone, setGuestPhone] = useState('');
    const [guestCnt, setGuestCnt] = useState(0);
    const [guestComment, setGuestComment] = useState('');

    const createRsvp = async () => {
        await weddingApi.createRsvp({
            url,
            guestType: guestType === 0 ? GuestType.GROOM : GuestType.BRIDE,
            isAttend: isAttend === 0,
            isMeal: isMeal === 0,
            guestName: guestName,
            guestPhone: guestPhone,
            bus: isBus === 0,
            guestCnt: guestCnt,
            guestComment: guestComment,
        });
        dismiss();
    }

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} $ui={css`
                max-width: 436px;
                width: 100vw;
                max-height: 100dvh;
                overflow-y: hidden;
                background: white;
                border-radius: 12px;
                ${applyBaseDialogContent()};
            `}>
                <Row $alignItems={'center'} $ui={css`
                    position: relative;
                    padding: 24px 0;
                `}>
                    <Spacer/>
                    <Text type={'p2'}>참석 의사 전달</Text>
                    <Spacer/>
                    <Icon
                        iconType={IconType.CrossLine}
                        size={20}
                        ui={css`
                            fill: var(--g-600);
                            cursor: pointer;
                            right: 32px;
                            position: absolute;
                        `}
                        onClick={dismiss}
                    />
                </Row>
                <Divider/>
                <Column $gap={36} $alignItems={'stretch'} $ui={css`
                    padding: 36px 40px;
                `}>
                    <Column $gap={24} $alignItems={'stretch'}>
                        <Column $gap={8} $alignItems={'stretch'}>
                            <Text type={'p3'}>어느 분의 하객인가요?</Text>
                            <SegmentedButton
                                selectedTab={guestType}
                                items={guestTypeList.map(i => guestTypeMap[i].korean)}
                                onChange={tab => {
                                    setGuestType(tab);
                                }}
                            />
                        </Column>
                        <Column $gap={8} $alignItems={'stretch'}>
                            <Text type={'p3'}>참석 여부를 선택해 주세요.</Text>
                            <SegmentedButton
                                selectedTab={isAttend}
                                items={['참석할게요', '참석이 어려워요']}
                                onChange={tab => {
                                    setIsAttend(tab);
                                }}
                            />
                        </Column>
                        {rsvp.attendMealStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>식사 여부를 선택해 주세요.</Text>
                                <SegmentedButton
                                    selectedTab={isMeal}
                                    items={['식사함', '식사안함']}
                                    onChange={tab => {
                                        setIsMeal(tab);
                                    }}
                                />
                            </Column>
                        )}
                        {rsvp.attendBusStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>버스 탑승 여부를 선택해 주세요.</Text>
                                <SegmentedButton
                                    selectedTab={isBus}
                                    items={['탑승함', '탑승안함']}
                                    onChange={tab => {
                                        setIsBus(tab);
                                    }}
                                />
                            </Column>
                        )}
                        <Column $gap={8} $alignItems={'stretch'}>
                            <Text type={'p3'}>참석자 성함</Text>
                            <Input
                                value={guestName}
                                onChange={event => setGuestName(event.target.value)}
                                hasLabel={false}
                            />
                        </Column>
                        {rsvp.attendPhoneStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>연락처</Text>
                                <Input
                                    value={guestPhone}
                                    onChange={event => {
                                        const value = event.target.value;
                                        const formatedPhone = formatPhone(value);
                                        setGuestPhone(formatedPhone);
                                    }}
                                    hasLabel={false}
                                />
                            </Column>
                        )}
                        {rsvp.attendGuestCntStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Row $alignItems={'center'} $gap={8}>
                                    <Text type={'p3'}>동행 인원</Text>
                                    <Text type={'caption1'} ui={css`
                                        color: var(--g-400);
                                    `}>본인 제외 동행 인원</Text>
                                </Row>
                                <Input
                                    value={guestCnt}
                                    onChange={event => setGuestCnt(Number(event.target.value))}
                                    type={'number'}
                                    min={0}
                                    hasLabel={false}
                                />
                            </Column>
                        )}
                        {rsvp.attendEtcStatus && (
                            <Column $gap={8} $alignItems={'stretch'}>
                                <Text type={'p3'}>추가로 전달할 내용을 입력해 주세요.</Text>
                                <Input
                                    value={guestComment}
                                    onChange={event => setGuestComment(event.target.value)}
                                    hasLabel={false}
                                />
                            </Column>
                        )}
                    </Column>
                    <Button text={'참석의사 전달하기'} onClick={() => setShowConfirmCreateRsvpDialog(true)}/>
                </Column>
            </Column>
            {showConfirmCreateRsvpDialog && (
                <Dialog
                    title={'참석의사 전달'}
                    description={'참석 의사 전달 시 수정이 불가능합니다.'}
                    dismiss={() => setShowConfirmCreateRsvpDialog(false)}
                    dismissButtonProps={{
                        text: '닫기'
                    }}
                    confirmButtonProps={{
                        text: '확인',
                        onClick: createRsvp
                    }}
                />
            )}
        </BaseDialog>
    );
}

export default CreateRsvpDialog;
