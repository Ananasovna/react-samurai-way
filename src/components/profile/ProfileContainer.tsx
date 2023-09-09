import {Component} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileActionCreators} from "../../redux/ducks/profile";
import {StateType} from "../../redux/store";
import {withRouter} from "../../hoc/withRouter";
import {ProfileAPI, ProfileType} from "../../api/socilaMediaApi";

type ProfileContainerPropsType = {
    profile: ProfileType
    addPost: () => void
    updateNewPostText: (text: string) => void
    setProfile: (profile: ProfileType) => void
    router: {
        params: {
            userId: string
        }
    }
}


class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = '2';
        }
        ProfileAPI.get(userId)
            .then((res) => {
                this.props.setProfile(res.data);
            })
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            let userId = this.props.router.params.userId;
            if (!userId) {
                userId = '2';
            }
            ProfileAPI.get(userId)
                .then((res) => {
                    this.props.setProfile(res.data);
                })
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile as ProfileType
    }
}


export default connect(mapStateToProps, {...profileActionCreators})(withRouter<ProfileContainerPropsType>(ProfileContainer));