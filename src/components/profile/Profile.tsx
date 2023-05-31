
import styles from './Profile.module.css';
export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img className={styles.img} src='https://trawor.by/media/tour_image/1359_20220404060735.png' alt="profile img"/>
            </div>
            <div className={styles.content}>
                <div>avatr + profile info</div>
                <div>My posts</div>
                <div>New post</div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>

    )
}