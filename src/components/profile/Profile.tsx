import styles from './Profile.module.css';
import {ProfileIno} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {Preloader} from "../common/Preloader";
import {ProfileType} from "../../api/socilaMediaApi";

type ProfilePropsType = {
    profile: ProfileType
    status: string | null
    updateStatus: (status: string) => void
}

export const Profile = ({profile, status, updateStatus}: ProfilePropsType) => {
    if (Object.keys(profile).length === 0) return <Preloader />;

    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img className={styles.img} src='https://trawor.by/media/tour_image/1359_20220404060735.png'
                     alt="profile img"/>
            </div>
            <div className={styles.content}>
                <ProfileIno profile={profile} status={status} updateStatus={updateStatus}/>
                <MyPostsContainer />
            </div>
        </div>

    )
}