import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/userinterface/specific/wedding/component/preview/PreviewTemplate";
import {Column} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Text from "@src/userinterface/component/Text";
import View from "@src/userinterface/core/View";
import {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import {format} from "date-fns";
import {getDetails} from "@src/infrastructure/network/value/WeddingSchedule";
import {implementText} from "@src/userinterface/foundation/text/TextProperties";

function ModernSimplePreviewTemplate(
    {
        weddingDesign,
        baseInfo,
        weddingSchedule
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <Column $gap={60} className={'override-font'} $alignItems={'center'} $ui={css`
            padding: 92px 0;
            ${implementText({fontFamily: 'TheFaceShopInklipquid'})};
            * {
                color: #333333;
            }
        `}>
            <Text size={44} weight={400}>Our Wedding Day</Text>
            <View as={'img'} src={weddingDesign.titleImgUrl} $ui={css`
                align-self: stretch;
                max-height: 312px;
                object-fit: cover;
            `}/>
            <Column $alignItems={'center'} $gap={24}>
                <Text size={40} weight={400}>
                    <Column $alignItems={'center'} $gap={16}>
                        <span>{first.name}</span>
                        <span>{second.name}</span>
                    </Column>
                </Text>
                {isValidDate && (
                    <Text size={24} weight={400}>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </Column>
        </Column>
    )
        ;
}

export default ModernSimplePreviewTemplate;
