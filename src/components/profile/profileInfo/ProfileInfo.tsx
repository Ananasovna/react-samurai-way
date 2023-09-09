import {ProfileType} from "../../../api/socilaMediaApi";


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