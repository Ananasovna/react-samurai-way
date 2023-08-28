import {Component} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileActionCreators} from "../../redux/ducks/profile";
import {StateType} from "../../redux/store";

export type ProfileType = {
    aboutMe: string
    contacts: {}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    photos: {
        large: string,
        small: string
    }
    userId: number
}

type ProfileContainerPropsType = {
    profile: ProfileType
    addPost: () => void
    updateNewPostText: (text: string) => void
    setProfile: (profile: string) => void
}

class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setProfile(res.data);
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        profile: state.profilePage.profile as ProfileType
    }
}

export default connect(mapStateToProps, {...profileActionCreators})(ProfileContainer);