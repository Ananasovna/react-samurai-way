import {ProfileType} from "../ProfileContainer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileIno = ({profile}: ProfileInfoPropsType) => {

    return (
        <div>
            <div>
                <img src={profile.photos.small} alt=""/>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    )
}