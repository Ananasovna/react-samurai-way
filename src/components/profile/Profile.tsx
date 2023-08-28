import styles from './Profile.module.css';
import {ProfileIno} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {Preloader} from "../common/Preloader";

type ProfilePropsType = {
    profile: ProfileType
}

export const Profile = ({profile}: ProfilePropsType) => {
    if (Object.keys(profile).length === 0) return <Preloader />;

    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img className={styles.img} src='https://trawor.by/media/tour_image/1359_20220404060735.png'
                     alt="profile img"/>
            </div>
            <div className={styles.content}>
                <ProfileIno profile={profile}/>
                <MyPostsContainer />
            </div>
        </div>

    )
}