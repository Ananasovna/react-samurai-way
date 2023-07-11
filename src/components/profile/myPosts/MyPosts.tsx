import {Post} from './Post';
import styles from './MyPosts.module.css';
import {PostType} from "../../../redux/types";
import {Sendler} from "../../common/Sendler";

type MyPostsProps = {
    data: PostType[]
}

export const MyPosts = ({data}: MyPostsProps) => {

    const getPosts = () => {
        return data.map(el => <Post key={el.id} data={el}/>);
    };

    const addMessage = (value: string) => {
        console.log(value)
    }

    return (
        <div className={styles.wrapper}>
            <Sendler buttonTitle={'Save'} callBack={addMessage} />
            <h1 className={styles.h1}>My posts</h1>
            {getPosts()}
        </div>
    )
}