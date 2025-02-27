import React, {ForwardedRef, forwardRef, ReactElement, SelectHTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";

interface OptionTextFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    items: string[],
    width?: number;

    renderItem(item: string): ReactElement<HTMLElement>;
}

function OptionSelect(
    {
        items,
        width = 98,
        renderItem,
        ...props
    }: OptionTextFieldProps,
    ref: ForwardedRef<HTMLSelectElement>
) {
    return (
        <S.wrapper width={width}>
            <S.select ref={ref} {...props}>
                {items.map((item, index) => (
                    <S.option key={index} value={item}>{renderItem(item)}</S.option>
                ))}
            </S.select>
            <Icon iconType={IconType.ExpandArrow} size={20} customStyle={css`
                fill: var(--g-400);
                rotate: -90deg;
            `}/>
        </S.wrapper>
    );
}

const S = {
    wrapper: styled.div<{ width: number }>`
        display: flex;
        position: relative;
        width: ${({width}) => width}px;
        align-items: center;
        padding-right: 16px;
        gap: 4px;
        border: 1px solid var(--g-200);
        border-radius: 8px;
        background: white;
        overflow: hidden;
    `,
    select: styled.select`
        display: flex;
        min-width: 0;
        height: 44px;
        padding: 12px 16px;
        align-items: center;
        flex: 1;
        text-overflow: ellipsis;
        border: none;
        outline: none;
        ${makeText('p5')};
        line-height: calc(44px / 2);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    `,
    option: styled.option`
    `
}

export default forwardRef(OptionSelect);