import {Post} from './Post';
import styles from './MyPosts.module.css';
import {DispatchType, PostType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";
import {profileActionCreators} from "../../../redux/ducks/profile";


type MyPostsProps = {
    data: PostType[]
    newPostText: string
    dispatch: DispatchType
}

export const MyPosts = ({data, newPostText, dispatch}: MyPostsProps) => {
    const getPosts = () => {
        return data.map(el => <Post key={el.id} data={el}/>).reverse();
    };

    return (
        <div className={styles.wrapper}>
            <Sendler value={newPostText} buttonTitle={'Save'} callBack={() => dispatch(profileActionCreators.addPost())} onChangeHandler={(value) => dispatch(profileActionCreators.updateNewPostText(value))}/>
            <h1 className={styles.h1}>My posts</h1>
            {getPosts()}
        </div>
    )
}