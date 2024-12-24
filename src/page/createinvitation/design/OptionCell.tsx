import React, {HTMLAttributes, useEffect, useState} from 'react';
import styled from "styled-components";
import makeText, {TextType} from "../../../designsystem/foundation/text/textType";
import colors from "../../../designsystem/foundation/colors";
import Icon, {IconType} from "../../../designsystem/foundation/icon";
import Spacer from "../../../designsystem/component/spacer";

interface OptionCellProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    children?: React.ReactNode;
}

function OptionCell(
    {
        title,
        children,
        ...props
    }: OptionCellProps
) {
    const [opened, setOpened] = useState(false);

    return (
        <S.container {...props}>
            <S.titleWrapper style={{
                outline: opened ? `1px solid ${colors.g100}` : undefined
            }}>
                <Icon
                    onClick={() => setOpened(opened => !opened)}
                    style={{
                        rotate: opened ? '90deg' : '-90deg'
                    }} 
                    type={IconType.ExpandArrow} 
                    size={24}
                    tint={colors.g600}
                />
                <S.title>{title}</S.title>
                <Spacer/>
                <Icon type={IconType.Hamburger} size={14} tint={colors.g600}/>
            </S.titleWrapper>
            {opened && children}
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        background: ${colors.white};
        border-radius: 4px;
    `,
    titleWrapper: styled.a`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 62px;
        gap: 12px;
        padding-left: 36px;
        padding-right: 32px;
        cursor: pointer;
    `,
    title: styled.span`
        ${makeText(TextType.p2)};
        color: ${colors.black};
    `
}

export default OptionCell;