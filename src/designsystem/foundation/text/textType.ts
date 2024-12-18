import {CSSProperties} from "react";
import {css, RuleSet} from "styled-components";

interface TextProperties {
    fontWeight: CSSProperties['fontWeight'];
    fontSize: CSSProperties['fontSize'];
    lineHeight: CSSProperties['lineHeight'];
}

export enum TextType {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p1,
    p2,
    p3,
    p4,
    p5,
    btn1,
    caption1,
    caption2,
}

const texts: Readonly<{ [key in TextType]: TextProperties }> = Object.freeze({
    [TextType.h1]: {
        fontWeight: 700,
        fontSize: 40,
        lineHeight: '130%'
    },
    [TextType.h2]: {
        fontWeight: 700,
        fontSize: 32,
        lineHeight: '130%'
    },
    [TextType.h3]: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '130%'
    },
    [TextType.h4]: {
        fontWeight: 600,
        fontSize: 24,
        lineHeight: '140%'
    },
    [TextType.h5]: {
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '140%'
    },
    [TextType.h6]: {
        fontWeight: 600,
        fontSize: 20,
        lineHeight: '150%'
    },
    [TextType.p1]: {
        fontWeight: 400,
        fontSize: 20,
        lineHeight: '150%'
    },
    [TextType.p2]: {
        fontWeight: 600,
        fontSize: 18,
        lineHeight: '150%'
    },
    [TextType.p3]: {
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '150%'
    },
    [TextType.p4]: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '160%'
    },
    [TextType.p5]: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '160%'
    },
    [TextType.btn1]: {
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '150%'
    },
    [TextType.caption1]: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '150%'
    },
    [TextType.caption2]: {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '140%'
    },
});

export default function makeText(text: TextType): RuleSet {
    const properties = texts[text];
    return css`
        font-weight: ${properties.fontWeight};
        font-size: ${properties.fontSize}px;
        line-height: ${properties.lineHeight};
        font-family: Pretendard, "Pretendard Variable", serif !important;
    `;
}