import {IconType} from "../../../designsystem/foundation/icon";

export type CreateInvitationSideBarType = 'dashboard' | 'design' | 'statistics';
export const createInvitationSideBarRecords: Record<CreateInvitationSideBarType, {
    title: string;
    icon: IconType;
}> = {
    dashboard: {
        title: '대쉬보드',
        icon: IconType.Manage
    },
    design: {
        title: '디자인',
        icon: IconType.Star
    },
    statistics: {
        title: '통계',
        icon: IconType.ArcticonsSpotistats
    }
};
