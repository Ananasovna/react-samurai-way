import {ProfileType} from "../../../api/socilaMediaApi";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileType
    status: string | null
    updateStatus: (status: string) => void
}

export const ProfileIno = ({profile, status, updateStatus}: ProfileInfoPropsType) => {

    return (
        <div>
            <div>
                <img src={profile.photos.small} alt=""/>
            </div>
            <div>{profile.fullName}</div>
            <div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}