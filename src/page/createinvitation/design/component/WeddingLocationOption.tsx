import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "./OptionLabel";
import Checkbox from "../../../../designsystem/component/checkbox";
import OptionTextField from "./OptionTextField";

function WeddingLocationOption() {
    return (
        <S.container>
            <Column gap={32}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'주소'}/>
                        <OptionTextField/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'예식장명'}/>
                        <OptionTextField placeholder={'예식장 이름 입력'}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'층/홀'}/>
                        <OptionTextField placeholder={'층, 웨딩홀 입력'}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'연락처'}/>
                        <OptionTextField placeholder={'- 없이 입력'}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'교통편'}/>
                        <OptionTextField placeholder={'주변 교통편 입력'}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row>
                    <OptionLabel label={'표시'}/>
                    <Checkbox label={'지도 표시'} checked={false} onChange={() => {}}/>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 32px;
    `
}

export default WeddingLocationOption;