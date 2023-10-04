import {StateType} from "../../store";
import {UserType} from "../../types";


const selectUsers = (state: StateType): UserType[] => {
    return state.users.users;
}

const selectPageSize = (state: StateType): number => {
    return state.users.pageSize;
}

const selectTotalUsersCount = (state: StateType): number => {
    return state.users.totalUsersCount;
}

const selectCurrentPage = (state: StateType): number => {
    return state.users.currentPage;
}

const selectIsFetching = (state: StateType): boolean => {
    return state.users.isFetching;
}

const selectFollowingInProgress = (state: StateType): string[] => {
    return state.users.followingInProgress;
}

export default {
    selectUsers,
    selectPageSize,
    selectTotalUsersCount,
    selectCurrentPage,
    selectIsFetching,
    selectFollowingInProgress,
}