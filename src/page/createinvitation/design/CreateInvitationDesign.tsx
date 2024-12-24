import React from 'react';
import S from './CreateInvitationDesign.style';
import OptionCell from "./OptionCell";
import Preview from "./Preview";
import BaseInfoOption from "./BaseInfoOption";

function CreateInvitationDesign() {
    return (
        <S.container>
            <S.optionContainer>
                <S.title>청첩장 제작</S.title>
                <S.titleDescription>원하는 청첩장을 만들어보세요!</S.titleDescription>
                <S.options>
                    <OptionCell
                        style={{
                            marginBottom: 20
                        }}
                        title={'템플릿'}
                    >
                        Wow
                    </OptionCell>
                    <OptionCell
                        style={{
                            marginBottom: 20
                        }}
                        title={'기본 정보'}
                        children={<BaseInfoOption/>}
                    />
                </S.options>
            </S.optionContainer>
            <Preview/>
        </S.container>
    );
}

export default CreateInvitationDesign;