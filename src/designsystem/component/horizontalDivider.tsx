import React, {CSSProperties} from 'react';
import styled from "styled-components";
import color from "../foundation/color";

export type HorizontalDividerSize = 'large' | 'medium' | 'small'; 

interface HorizontalDividerProps {
    size: HorizontalDividerSize;
}

function HorizontalDivider(
    {
        size
    }: HorizontalDividerProps
) {
    
    let height: CSSProperties['height'];
    switch (size) {
        case 'large':
            height = 12;
            break;
        case 'medium':
            height = 8;
            break;
        case 'small':
            height = 1;
            break;
    }
    
    return (
        <S.Divider style={{
            height
        }}/>
    );
}

const S = {
    Divider: styled.div`
        width: 100%;
        background: ${color.g100};
    `
}

export default HorizontalDivider;