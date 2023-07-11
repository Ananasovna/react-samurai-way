import {Post} from './Post';
import styles from './MyPosts.module.css';
import {AddPost} from './AddPost';
import {PostType} from "../../../redux/types";

type MyPostsProps = {
    data: PostType[]
}

export const MyPosts = ({data}: MyPostsProps) => {

    const getPosts = () => {
        return data.map(el => <Post key={el.id} data={el}/>);
    };

    return (
        <div className={styles.wrapper}>
            <AddPost />
            <h1 className={styles.h1}>My posts</h1>
            {getPosts()}
        </div>
    )
}