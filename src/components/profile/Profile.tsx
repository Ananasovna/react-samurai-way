
import styles from './Profile.module.css';
export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileImg}>
                <img src='https://severnykavkaz.ru/wp-content/uploads/2019/01/gory-kabardino-balkarii-1200x540.jpg' alt="profile img"/>
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