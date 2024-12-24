import React from 'react';
import S from './CreateInvitationDesign.style';
import OptionCell from "./component/OptionCell";
import Preview from "./component/Preview";
import BaseInfoOption from "./component/BaseInfoOption";
import WeddingScheduleOption from "./component/WeddingScheduleOption";
import WeddingLocationOption from "./component/WeddingLocationOption";

function CreateInvitationDesign() {
    return (
        <S.container>
            <S.optionContainer>
                <S.title>청첩장 제작</S.title>
                <S.titleDescription>원하는 청첩장을 만들어보세요!</S.titleDescription>
                <S.options>
                    <OptionCell title={'템플릿'}>Wow</OptionCell>
                    <OptionCell title={'기본 정보'}><BaseInfoOption/></OptionCell>
                    <OptionCell title={'예식 일시'}><WeddingScheduleOption/></OptionCell>
                    <OptionCell title={'예식 장소'}><WeddingLocationOption/></OptionCell>
                </S.options>
            </S.optionContainer>
            <Preview/>
        </S.container>
    );
}

export default CreateInvitationDesign;