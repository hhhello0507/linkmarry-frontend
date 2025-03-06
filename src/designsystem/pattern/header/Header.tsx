import React, {ComponentPropsWithoutRef, Dispatch, SetStateAction, useState} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import Button from "@designsystem/component/Button";
import {useNavigate} from "react-router-dom";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Popover from "@designsystem/pattern/Popover";
import Divider from "@designsystem/component/Divider";
import CustomStyle from "@designsystem/core/CustomStyle";
import useResponsive from "@hook/useResponsive";
import Logo from "@src/component/Logo";
import useAuth from "@hook/useAuth";
import {makeInteractionEffect} from "@util/css.util";

function Header() {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileHeader/>;
    }

    return <DesktopHeader/>;
}

function MobileHeader() {
    const {authorized} = useAuth();
    const [openDetail, setOpenDetail] = useState(false);
    const navigate = useNavigate();

    if (openDetail) {
        return (
            <Column as={'header'} $alignItems={'stretch'} css={css`
                position: relative;
            `}>
                <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>
                <Column gap={16} $alignItems={'stretch'} css={css`
                    padding-top: 24px;
                    position: absolute;
                    margin-top: 60px;
                    width: 100vw;
                    background: white;
                    height: calc(100vh - 60px);
                    z-index: 100;
                `}>
                    {authorized ? (
                        <Column gap={8} $alignItems={'stretch'}>
                            <MobileHeaderItem text={'내 모바일 청첩장'} icon={IconType.Envelope} onClick={() => {
                                navigate('/mypage/wedding');
                                setOpenDetail(false);
                            }}/>
                            <MobileHeaderItem text={'회원정보'} icon={IconType.PersonLine} onClick={() => {
                                navigate('/mypage/info');
                                setOpenDetail(false);
                            }}/>
                        </Column>
                    ) : (
                        <Button text={'로그인'} buttonType={'outlined'} customStyle={css`
                            margin: 0 24px;
                        `} onClick={() => {
                            navigate('/login');
                        }}/>
                    )}
                    <Divider size={'large'}/>
                    <Column gap={8} $alignItems={'stretch'}>
                        <MobileHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }}/>
                        <MobileHeaderItem text={'공지사항'} onClick={() => {
                        }}/>
                        <MobileHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open('https://smartstore.naver.com/linkmarry');
                        }}/>
                    </Column>
                </Column>
            </Column>
        )
    }

    return <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>;
}

function MobileHeaderContent(props: {
    openDetail: boolean;
    setOpenDetail: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <Row $alignItems={'center'} css={css`
            width: 100vw;
            height: 60px;
            background: white;
            border-bottom: 1px solid var(--g-200);
            padding: 0 16px;
        `}>
            <LogoInHeader/>
            <Spacer/>
            <Icon iconType={props.openDetail ? IconType.CrossLine : IconType.Hamburger} width={24} height={24}
                  customStyle={css`
                      fill: var(--g-900);
                      padding: 4px;
                      cursor: pointer;
                  `} onClick={() => {
                props.setOpenDetail(i => !i);
            }}/>
        </Row>
    )
}

function DesktopHeader() {
    const {authorized} = useAuth();
    const navigate = useNavigate();
    const [openMyInfoPopover, setOpenMyInfoPopover] = useState(false);

    return (
        <Row as={'header'} $justifyContent={'center'} $alignItems={'center'} css={css`
            width: 100vw;
            min-height: 72px;
            background: white;
            border-bottom: 1px solid var(--g-200);
            padding: 0 24px;
        `}>
            <Row $alignItems={'center'} css={css`
                max-width: 1100px;
                flex: 1;
            `}>
                <Row gap={40} $alignItems={'center'}>
                    <LogoInHeader/>
                    <Row gap={12} $alignItems={'center'}>
                        <DesktopHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }}/>
                        <DesktopHeaderItem text={'공지사항'} onClick={() => {
                            // todo: navigate to notion.
                        }}/>
                        <DesktopHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open('https://smartstore.naver.com/linkmarry');
                        }}/>
                    </Row>
                </Row>
                <Spacer/>
                {authorized ? (
                    <CustomStyle css={css`
                        position: relative;
                    `}>
                        <DesktopHeaderItem text={'내 정보'} hasPopover={true} onClick={() => {
                            setOpenMyInfoPopover(i => !i);
                        }}/>
                        {openMyInfoPopover && (
                            <Popover
                                items={[
                                    {
                                        icon: IconType.Envelope,
                                        text: '내 모바일 청첩장',
                                        onClick: () => {
                                            navigate('/mypage/wedding');
                                        }
                                    },
                                    {
                                        icon: IconType.PersonLine,
                                        text: '회원정보',
                                        onClick: () => {
                                            navigate('/mypage/info');
                                        }
                                    }
                                ]}
                                dismiss={() => {
                                    setOpenMyInfoPopover(false);
                                }}
                                customStyle={css`
                                    right: 0;
                                `}
                            />
                        )}
                    </CustomStyle>
                ) : (
                    <Button text={'로그인'} buttonType={'outlined'} size={'medium'} onClick={() => {
                        navigate('/login');
                    }}/>
                )}
            </Row>
        </Row>
    );
}

function MobileHeaderItem(props: {
    text: string;
    icon?: IconType;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Row gap={8} {...props} css={css`
            padding: 12px 16px;
            ${makeInteractionEffect('strong')};
        `}>
            {props.icon && (
                <Icon iconType={props.icon} width={20} height={20} customStyle={css`
                    fill: var(--g-800);
                `}/>
            )}
            <Text type={'p3'} bold={true} customStyle={css`
                color: var(--g-800);
            `}>{props.text}</Text>
        </Row>
    )
}

function DesktopHeaderItem({text, hasPopover = false, ...props}: {
    text: string;
    hasPopover?: boolean;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Row gap={8} $alignItems={'center'} css={css`
            padding: 8px 16px;
            border-radius: 6px;
            ${makeInteractionEffect('strong')};
        `} {...props}>
            <Text type={'p3'} bold={true} customStyle={css`
                white-space: nowrap;
            `}>{text}</Text>
            {hasPopover && (
                <Icon iconType={IconType.ExpandArrow} width={20} height={20} customStyle={css`
                    rotate: -90deg;
                    fill: var(--g-400);
                `}/>
            )}
        </Row>
    );
}

function LogoInHeader() {
    const navigate = useNavigate();
    return (
        <Logo customStyle={css`
            cursor: pointer;
        `} onClick={() => {
            navigate('/');
        }}/>
    );
}

export default Header;
