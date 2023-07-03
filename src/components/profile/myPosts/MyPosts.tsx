import {Post} from './Post';
import s from './MyPosts.module.css';
import {AddPost} from './AddPost';
import {TPost} from "../../../redux/types";

type MyPostsProps = {
    data: TPost[]
}

export const MyPosts = ({data}: MyPostsProps) => {

    const getPosts = () => {
        return data.map(el => <Post key={el.id} data={el}/>);
    };

    return (
        <div className={s.wrapper}>
            <AddPost />
            <h1 className={s.h1}>My posts</h1>
            {getPosts()}
        </div>
    )
}