import React from 'react';
import styled from "styled-components";

function Header() {
    return (
        <S.container>
            <span>logo</span>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 100vw;
        height: 96px;
        align-items: center;
    `
};

export default Header;