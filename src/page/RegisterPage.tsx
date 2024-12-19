import React from 'react';
import * as S from './RegisterPage.style';
import config from "../config/config";

function RegisterPage() {

    const loginWithKakao = () => {
        const kakao = (window as any)?.Kakao;
        
        kakao?.Auth?.authorize({
            redirectUri: config.kakao.redirectUri
        });
    };
    
    return (
        <S.Container>
            <button onClick={() => {
                loginWithKakao();
            }}>Login</button>
        </S.Container>
    );
}

export default RegisterPage;