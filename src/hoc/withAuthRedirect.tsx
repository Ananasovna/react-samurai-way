import {Navigate} from "react-router-dom";
import {Component, ComponentType} from "react";
import {StateType} from "../redux/store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean | null
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = <T,>(MyComponent: ComponentType<T>)=> {
    class RedirectComponent extends Component<MapStateToPropsType> {
        render() {
            let {isAuth, ...restProps} = this.props

            if (!isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <MyComponent {...restProps as T & {}}/>
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}

// export function withAuthRedirect<T>(MyComponent: ComponentType<T>) {
//
//     const RedirectComponent = (props: MapStateToPropsType) => {
//         let {isAuth, ...restProps} = props
//
//         if (isAuth === false) return <Navigate to={'/login'}/>
//
//         return (
//             <MyComponent {...restProps as T & {}}/>
//         )
//     }
//     return connect(mapStateToProps)(RedirectComponent)
// }