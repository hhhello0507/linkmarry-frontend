import React, {InputHTMLAttributes} from 'react';
import styled from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";

function OptionTextField(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <S.textField {...props}/>
    );
}

const S = {
    textField: styled.input`
        display: flex;
        height: 44px;
        border: 1px solid ${colors.g200};
        background: ${colors.white};
        border-radius: 8px;
        width: 98px;
        outline: none;
        ${makeText(TextType.p5)};
        padding-left: 16px;
        padding-right: 16px;
    `
}

export default OptionTextField;