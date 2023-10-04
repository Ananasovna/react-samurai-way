import {StateType} from "../../store";
import {ProfileType} from "../../../api/socilaMediaApi";
import {PostType} from "../../types";


const selectProfile = (state: StateType): ProfileType | {} => {
    return state.profilePage.profile;
}

const selectPosts = (state: StateType): PostType[] => {
    return state.profilePage.posts;
}

const selectStatus = (state: StateType): string | null => {
    return state.profilePage.status;
}

export default {
    selectProfile,
    selectPosts,
    selectStatus,
}