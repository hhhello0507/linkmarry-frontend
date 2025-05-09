import React, {ComponentProps} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Divider from "@src/userinterface/component/Divider";
import {format} from "date-fns";
import {ko} from "date-fns/locale";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import View from "@src/userinterface/core/View";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import {backgroundStyle} from "@src/infrastructure/network/value/WeddingDesign";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";

function WhiteMomentPreviewTemplate(
    {
        baseInfo,
        weddingDesign,
        weddingPlace,
        weddingSchedule,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column className={'override-font'} $alignItems={'stretch'} $ui={css`
            padding: 44px 30px;
            ${backgroundStyle(weddingDesign.weddingDesignColor)};
            ${implementText({fontFamily: 'LINESeedKR'})};
        `}>
            <Column $gap={36} $alignItems={'center'} $ui={css`
                margin: 0 23px 44px 23px;
            `}>
                <Text size={24} weight={100}>{first.lastName} & {second.lastName}</Text>
                <Divider ui={css`
                    background: black;
                `}/>
                <Column $alignItems={'center'} $gap={12}>
                    <Text size={18}
                          weight={300}>{isValidDate && format(date, 'yyyy년 M월 d일 EEEE a h시', {locale: ko})}</Text>
                    <Text size={18} weight={300}>{weddingPlace.placeName}({weddingPlace.floorHall})</Text>
                </Column>
            </Column>
            <Column $gap={44} $alignItems={'center'}>
                <View as={'img'} src={weddingDesign.titleImgUrl ?? '/EmptyImage.png'} $ui={css`
                    display: flex;
                    width: 100%;
                    height: 512px;
                    object-fit: cover;
                    border-radius: 1000px 1000px 0 0;
                    border: none;
                    outline: none;
                `}/>
                <Row $gap={8} $alignItems={'center'}>
                    <Text size={16} weight={300}>{first.korean} {first.lastName}</Text>
                    <Icon iconType={IconType.HeartFill} size={16} ui={css`
                        fill: black;
                    `}/>
                    <Text size={16} weight={300}>{second.korean} {second.lastName}</Text>
                </Row>
            </Column>
        </Column>
    );
}

export default WhiteMomentPreviewTemplate;
