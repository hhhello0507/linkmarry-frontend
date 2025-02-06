import React from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {TemplateColor} from "@remote/value/Template";
import Button from "@designsystem/component/Button";
import Divider from "@designsystem/component/Divider";
import Icon, {IconType} from "@designsystem/foundation/icon";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import {css} from "styled-components";

interface RsvpTemplateProps {
    templateColor: TemplateColor;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    onClickCreateRsvp: () => void;
}

function RsvpTemplate(
    {
        templateColor,
        baseInfo,
        weddingSchedule,
        onClickCreateRsvp
    }: RsvpTemplateProps
) {
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column gap={40} $alignItems={'center'} $customStyle={css`
            padding: 92px 60px;
            background: ${templateColor};
        `}>
            <Column $alignItems={'center'}>
                <Text
                    size={24} weight={300}
                    customStyle={css`
                        color: var(--g-600);
                        word-break: break-all;
                        text-align: center;
                    `}
                >RSVP</Text>
                <Text
                    size={18} weight={300}
                    customStyle={css`
                        color: var(--g-600);
                        word-break: break-all;
                        text-align: center;
                    `}
                >참석의사를 알려주세요!</Text>
            </Column>
            <Column
                $alignItems={'stretch'} $alignSelf={'stretch'} gap={62}
                $customStyle={css`
                    padding: 32px 28px;
                    background: white;
                    border-radius: 12px;
                `}
            >
                <Column gap={40} $alignItems={'stretch'}>
                    <Column gap={20} $alignItems={'stretch'}>
                        <Row gap={6} $alignItems={'center'} $customStyle={css`
                            padding: 5px 0;
                        `}>
                            <Text
                                size={16} weight={300}
                                customStyle={css`
                                    flex: 1;
                                    text-align: center;
                                `}
                            >{first.korean} {first.name}</Text>
                            <Icon iconType={IconType.HeartFill} size={16} customStyle={css`
                                color: var(--g-600);
                            `}/>
                            <Text size={16} weight={300} customStyle={css`
                                flex: 1;
                                text-align: center;
                            `}>{second.korean} {second.name}</Text>
                        </Row>
                        <Divider/>
                    </Column>
                    {isValidDate && (
                        <Text type={'p3'} customStyle={css`
                            color: var(--g-600);
                        `}>
                            <Column gap={12} $alignItems={'center'}>
                                <span>{format(date, 'yyyy년 M월 d일')}</span>
                                <span>{format(date, 'EEEE a h시', {locale: ko})}</span>
                            </Column>
                        </Text>
                    )}
                </Column>
                <Button text={'참석의사 보내기'} onClick={onClickCreateRsvp}/>
            </Column>
        </Column>
    );
}

export default RsvpTemplate;