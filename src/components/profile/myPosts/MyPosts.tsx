import {Post} from './Post';
import s from './MyPosts.module.css';
import {AddPost} from './AddPost';

export const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <AddPost />
            <h1>My posts</h1>
            <Post text={'my first post'}/>
            <Post text={'Hey! It\'s me. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
            <Post text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eius explicabo iusto labore neque perferendis provident repudiandae tempora veritatis? Adipisci aspernatur autem illo labore quos sunt veniam voluptas. Amet.'}/>
            <Post text={'Hey! It\'s me'}/>
        </div>
    )
}