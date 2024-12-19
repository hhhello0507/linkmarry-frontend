import React, {CSSProperties} from 'react';
import styled from "styled-components";
import Icon, {IconType} from "../foundation/icon";
import color from "../foundation/color";
import makeText, {TextType} from "../foundation/text/textType";

interface CheckboxProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    title?: string;
    rounded?: boolean;
    style?: CSSProperties;
}

function Checkbox(
    {
        checked,
        onChange,
        title,
        rounded = false,
        style
    }: CheckboxProps,
) {
    return (
        <S.container style={style}>
            <S.checkbox
                style={{
                    borderRadius: rounded ? 10 : 4,
                    border: checked ? undefined : `1px solid ${color.g300}`,
                    background: checked ? color.g600 : color.transparent,
                }}
                onClick={() => onChange(!checked)}
            >
                {checked && <Icon type={IconType.CheckLine} tint={color.white} size={18}/>}
            </S.checkbox>
            {title && <S.title>{title}</S.title>}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: inline-flex;
        align-items: center;
        width: fit-content;
        gap: 8px;
    `,
    checkbox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;

        cursor: pointer;
    `,
    title: styled.span`
        display: inline-flex;

        ${makeText(TextType.p4)};
        color: ${color.black};
    `
}

export default Checkbox;