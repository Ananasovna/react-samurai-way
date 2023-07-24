import styles from './Profile.module.css';
import {MyPosts} from './myPosts/MyPosts';
import {ProfileIno} from "./profileInfo/ProfileInfo";
import {DispatchType, ProfilePageType} from "../../redux/types";

type ProfileProps = {
    data: ProfilePageType
    dispatch: DispatchType
}

export const Profile = ({data, dispatch}: ProfileProps) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img className={styles.img} src='https://trawor.by/media/tour_image/1359_20220404060735.png'
                     alt="profile img"/>
            </div>
            <div className={styles.content}>
                <ProfileIno/>
                <MyPosts data={data.posts} newPostText={data.newPostText} dispatch={dispatch}/>
            </div>
        </div>

    )
}