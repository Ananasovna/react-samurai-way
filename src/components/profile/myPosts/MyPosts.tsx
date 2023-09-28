import {Post} from './Post';
import styles from './MyPosts.module.css';
import {PostType} from "../../../redux/types";
import {SendTextForm} from "../../common/SendTextForm";


type MyPostsProps = {
    data: PostType[]
    addPost: (text: string) => void
}

export const MyPosts = ({data, addPost}: MyPostsProps) => {
    const getPosts = () => {
        return data.map(el => <Post key={el.id} data={el}/>).reverse();
    };

    return (
        <div className={styles.wrapper}>
            <SendTextForm buttonTitle={'Save'} callBack={addPost}/>
            <h1 className={styles.h1}>My posts</h1>
            {getPosts()}
        </div>
    )
}