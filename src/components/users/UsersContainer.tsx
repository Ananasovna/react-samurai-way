import {connect} from "react-redux";
import {Users} from "./Users";
import axios from "axios";
import {DispatchType} from "../../redux/types";
import {usersActionCreators} from "../../redux/ducks/users";
import {StateType} from "../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
       users: state.users,
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        setFollow: (value: boolean, userId: string) => {
            dispatch(usersActionCreators.setFollowed(value, userId));
        },
        setUsers: async () => {
            try {
                const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users');
                console.log(Array.from(response.data.items))
                dispatch(usersActionCreators.setUsers(Array.from(response.data.items)));
            } catch (err) {
                console.log(err);
            }

        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)