import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import OptionLabel from "./OptionLabel";
import OptionTextField from "./OptionTextField";

function GreetingOption() {
    return (
        <S.container>
            <Column gap={16}>
                <Row>
                    <OptionLabel label={'제목'}/>
                    <OptionTextField/>
                </Row>
                <Row>
                    <OptionLabel label={'내용'}/>
                    <OptionTextField/>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `
}

export default GreetingOption;