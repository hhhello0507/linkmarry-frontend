import React, {useState} from 'react';
import S from './CreateInvitationPage.style';
import CreateInvitationSideBar from "./component/CreateInvitationSideBar";
import {CreateInvitationSideBarType} from "./component/CreateInvitationSideBarType";
import CreateInvitationDesign from "./design/CreateInvitationDesign";

function CreateInvitationPage() {
    const [selectedSideBarType, setSelectedSideBarType] = useState<CreateInvitationSideBarType>('dashboard');

    const subPage = () => {
        switch (selectedSideBarType) {
            case 'dashboard':
                return <div>Dashboard</div>
            case 'design':
                return <CreateInvitationDesign/>;
            case 'statistics':
                return <div>Statistics</div>
        }
    };

    return (
        <S.container>
            <CreateInvitationSideBar selected={selectedSideBarType} onChange={item => {
                setSelectedSideBarType(item);
            }}/>
            {subPage()}
        </S.container>
    );
}

export default CreateInvitationPage;