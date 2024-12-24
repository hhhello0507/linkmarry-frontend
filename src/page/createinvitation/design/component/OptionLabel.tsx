import React from 'react';
import styled from "styled-components";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import colors from "../../../../designsystem/foundation/colors";

interface OptionLabelProps {
    label: string;
}

function OptionLabel(
    {
        label
    }: OptionLabelProps
) {
    return (
        <S.wrapper>
            <S.label>{label}</S.label>
        </S.wrapper>
    );
}

const S = {
    wrapper: styled.div`
        display: flex;
        width: 72px;
        align-self: stretch;
        align-items: center;
    `,
    label: styled.span`
        display: flex;
        ${makeText(TextType.p4)};
        color: ${colors.black};
    `
}

export default OptionLabel;