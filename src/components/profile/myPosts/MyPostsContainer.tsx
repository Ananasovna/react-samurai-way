import {DispatchType, StateType} from "../../../redux/types";
import {profileActionCreators} from "../../../redux/ducks/profile";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        data: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => {
            console.log(1)
            dispatch(profileActionCreators.addPost())
    },
        updateNewPostText: (value: string) => {
            dispatch(profileActionCreators.updateNewPostText(value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)