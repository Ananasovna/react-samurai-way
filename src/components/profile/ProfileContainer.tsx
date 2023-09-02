import {Component, ComponentType, FunctionComponent, ReactNode} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {profileActionCreators} from "../../redux/ducks/profile";
import {StateType} from "../../redux/store";
import { useParams, Params } from 'react-router-dom';

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
    router: {
        params: {
            userId: string
        }
    }
}

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    setProfile: (profile: string) => void

}

export function withRouter<T> (Component: ComponentType<T>) {
    return (function ComponentWithRouterProp(props: T &  Readonly<Params<string>>) {
        let params = useParams();
        return <Component {...props} router={{params }} />;
    });
};


class ProfileContainer extends Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile as ProfileType
    }
}


export default connect(mapStateToProps, {...profileActionCreators})(withRouter<ProfileContainerPropsType>(ProfileContainer));