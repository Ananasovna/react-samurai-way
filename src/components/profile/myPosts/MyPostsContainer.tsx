import {DispatchType} from "../../../redux/types";
import {profileActionCreators} from "../../../redux/ducks/profile";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        data: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (text: string) => {
            dispatch(profileActionCreators.addPost(text))
    },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)