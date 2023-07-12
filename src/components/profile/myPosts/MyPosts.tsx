import {Post} from './Post';
import styles from './MyPosts.module.css';
import {PostType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";


type MyPostsProps = {
    data: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
}

export const MyPosts = ({data, updateNewPostText, newPostText, addPost}: MyPostsProps) => {

    const getPosts = () => {
        return data.map(el => <Post key={el.id} data={el}/>).reverse();
    };

    return (
        <div className={styles.wrapper}>
            <Sendler value={newPostText} buttonTitle={'Save'} callBack={addPost} onChangeHandler={updateNewPostText}/>
            <h1 className={styles.h1}>My posts</h1>
            {getPosts()}
        </div>
    )
}