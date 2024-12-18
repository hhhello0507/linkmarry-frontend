import Icon, {IconType} from "../foundation/icon";
import styled from "styled-components";
import makeText, {TextType} from "../foundation/text/textType";
import color from "../foundation/color";
import {CSSProperties} from "react";

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonRole = 'primary' | 'secondary' | 'assistive';

interface ButtonProps {
    text: string;
    size?: ButtonSize;
    role?: ButtonRole;
    leadingIcon?: IconType;
    trailingIcon?: IconType;
    enabled?: boolean;
}

export default function Button(
    {
        text,
        size = 'large',
        role = 'primary',
        leadingIcon,
        trailingIcon,
        enabled = true
    }: ButtonProps
) {
    let background: string, foreground: string;
    switch (role) {
        case 'primary':
            background = color.p700;
            foreground = color.p100;
            break;
        case 'secondary':
            background = color.p100;
            foreground = color.p800;
            break;
        case 'assistive':
            background = color.g100;
            foreground = color.g600;
            break;
    }

    let borderRadius: number,
        contentPadding: CSSProperties['padding'],
        iconSize: CSSProperties['width'],
        height: CSSProperties['height'],
        textType: TextType;

    switch (size) {
        case 'large':
            borderRadius = 12;
            contentPadding = '10px 20px';
            iconSize = 20;
            height = 46;
            textType = TextType.p4;
            break;
        case 'medium':
            borderRadius = 10;
            contentPadding = '8px 16px';
            iconSize = 18;
            height = 37;
            textType = TextType.btn1;
            break;
        case 'small':
            borderRadius = 8;
            contentPadding = '6px 12px';
            iconSize = 16;
            height = 29;
            textType = TextType.caption2;
            break;
    }

    return (
        <S.Container
            style={{
                opacity: enabled ? 1 : 0.5,
                background,
                color: foreground,
                borderRadius,
                padding: contentPadding,
                height
            }} 
            enabled={enabled}
            disabled={!enabled}
            textType={textType}
        >
            {leadingIcon && (
                <Icon type={leadingIcon} tint={foreground} size={iconSize}/>
            )}
            {text}
            {trailingIcon && (
                <Icon type={trailingIcon} tint={foreground} size={iconSize}/>
            )}
        </S.Container>
    )
}

const S = {
    Container: styled.button<{
        enabled: boolean,
        textType: TextType
    }>`
        display: inline-flex;

        outline: none;
        border: none;
        ${({textType}) => makeText(textType)};
        
        &:disabled {
            opacity: 1;
            background: black;
        }
        
        &:enabled {
            cursor: pointer;
        }
        
        &:hover {
            opacity: 0.5;
        }
        
        &:active {
            scale: 0.96;
        }
        
        transition: 0.1s scale ease-in-out;
    `
}