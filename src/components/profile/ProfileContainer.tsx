import {Component, ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {profileActionCreators, profileThunkCreators} from "../../redux/ducks/profile";
import {StateType} from "../../redux/store";
import {withRouter} from "../../hoc/withRouter";
import {ProfileType} from "../../api/socilaMediaApi";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerPropsType = {
    profile: ProfileType
    isAuth: boolean | null
    status: string | null
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    authUserId: number | null
    router: {
        params: {
            userId: string
        }
    }
}


class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId && this.props.authUserId) {
            userId = this.props.authUserId.toString();
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            let userId = this.props.router.params.userId;
            if (!userId && this.props.authUserId) {
                userId = this.props.authUserId.toString();
            }
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return (

            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean | null
    status: string | null
    authUserId: number | null
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile as ProfileType,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authUserId: state.auth.id,
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {...profileActionCreators, ...profileThunkCreators}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

