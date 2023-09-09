import {Component} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {profileActionCreators, profileThunkCreators} from "../../redux/ducks/profile";
import {StateType} from "../../redux/store";
import {withRouter} from "../../hoc/withRouter";
import {ProfileType} from "../../api/socilaMediaApi";

type ProfileContainerPropsType = {
    profile: ProfileType
    getProfile: (userId: string) => void
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
        this.props.getProfile(userId);
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            let userId = this.props.router.params.userId;
            if (!userId) {
                userId = '2';
            }
            this.props.getProfile(userId);
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


export default connect(mapStateToProps, {...profileActionCreators, ...profileThunkCreators})(withRouter<ProfileContainerPropsType>(ProfileContainer));