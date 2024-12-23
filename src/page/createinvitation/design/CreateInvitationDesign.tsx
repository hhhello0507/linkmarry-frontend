import React from 'react';
import S from './CreateInvitationDesign.style';
import OptionCell from "./OptionCell";

function CreateInvitationDesign() {

    return (
        <S.container>
            <S.title>청첩장 제작</S.title>
            <S.titleDescription>원하는 청첩장을 만들어보세요!</S.titleDescription>
            <S.options>
                {['기본 정보', '예식 일시', '예식 장소'].map(item => (
                    <OptionCell style={{
                        marginBottom: 20
                    }} title={item}>Wow</OptionCell>
                ))}
            </S.options>
        </S.container>
    );
}

export default CreateInvitationDesign;