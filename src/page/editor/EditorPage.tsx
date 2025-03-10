import React, {useEffect, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import EditorHeader from "@page/editor/EditorHeader";
import {css} from "styled-components";
import EditorNavigationBar from "@page/editor/EditorNavigationBar";
import EditorNavType from "@page/editor/EditorNavType";
import EditorPreview from "@page/editor/EditorPreview";
import EditorInspector from "@page/editor/inspector/EditorInspector";
import useResponsive from "@hook/useResponsive";
import {hideScrollBar} from "@util/css.util";
import useWeddingDesigns from "@hook/useWeddingDesigns";
import useBackgroundMusics from "@hook/useBackgroundMusics";
import useWedding from "@hook/useWedding";
import Dialog from "@designsystem/pattern/dialog/Dialog";
import {toDomain} from "@remote/value/WeddingDto";
import CreateWeddingDialog from "@page/editor/dialog/CreateWeddingDialog";
import {useNavigate, useSearchParams} from "react-router-dom";

const EditorPage = () => {
    const [searchParams] = useSearchParams();
    const designId = searchParams.get('designId');
    const numericDesignId = designId ? parseInt(designId) : null;
    const [currentNavType, setCurrentNavType] = useState<EditorNavType>('design');
    const {deviceSize} = useResponsive();
    const [openInspector, setOpenInspector] = useState(true);
    const {wedding, updateWedding, saveWedding} = useWedding();
    const {weddingDesigns} = useWeddingDesigns();
    const {musics} = useBackgroundMusics();
    const [showSaveSuccessDialog, setShowSaveSuccessDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        updateWedding(draft => {
            const weddingDesign = weddingDesigns?.find(i => i.id === numericDesignId);
            if (weddingDesign) {
                draft.weddingDesign.weddingDesignName = weddingDesign.name;
            }
        })
    }, [numericDesignId, weddingDesigns]);

    return (
        <Column $alignItems={'stretch'} $ui={css`
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: var(--g-100);
            ${hideScrollBar};
        `}>
            <CreateWeddingDialog
                wedding={wedding}
                onChange={url => updateWedding(draft => {
                    draft.url = url;
                })}
            />
            {showSaveSuccessDialog && (
                <Dialog
                    title={'청첩장이 완성되었어요! 🎉'}
                    dismiss={() => setShowSaveSuccessDialog(false)}
                    confirmButtonProps={{
                        text: '닫기',
                        buttonType: 'tonal'
                    }}
                />
            )}
            <Column $alignItems={'stretch'} $flex={1} $ui={css`
                overflow: hidden;
                background: white;
                ${(deviceSize === 'mobile' || deviceSize === 'tablet') && css`
                    max-width: 720px;
                    width: 100%;
                    margin: 0 auto;
                `};
            `}>
                <EditorHeader
                    onShowPreview={() => {
                        navigate(`/wedding/${wedding.url}`);
                    }}
                    onSave={async () => {
                        await saveWedding();
                        setShowSaveSuccessDialog(true);
                    }}
                />
                <EditorNavigationBar
                    currentNavType={currentNavType}
                    onChangeNavType={type => setCurrentNavType(type)}
                    openInspector={openInspector}
                    onToggleInspector={() => {
                        setOpenInspector(i => !i);
                    }}
                >
                    {(openInspector || deviceSize !== 'desktop') && (
                        <EditorInspector
                            value={wedding}
                            update={updateWedding}
                            currentNavType={currentNavType}
                            weddingDesigns={weddingDesigns}
                            backgroundMusics={musics}
                        />
                    )}
                    {deviceSize === 'desktop' && (
                        <EditorPreview wedding={toDomain(wedding, true)}/>
                    )}
                </EditorNavigationBar>
            </Column>
        </Column>
    );
};

export default EditorPage;
