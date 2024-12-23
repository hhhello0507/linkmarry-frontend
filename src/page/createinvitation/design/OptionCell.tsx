import React, {HTMLAttributes, useEffect, useState} from 'react';
import styled from "styled-components";
import makeText, {TextType} from "../../../designsystem/foundation/text/textType";
import colors from "../../../designsystem/foundation/colors";
import Icon, {IconType} from "../../../designsystem/foundation/icon";

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
            <S.titleWrapper onClick={() => setOpened(opened => !opened)}>
                <S.title>{title}</S.title>
                <Icon style={{
                    rotate: opened ? '90deg' : '-90deg'
                }} type={IconType.ExpandArrow} size={24} tint={colors.g400}/>
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
    `,
    titleWrapper: styled.a`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 62px;
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