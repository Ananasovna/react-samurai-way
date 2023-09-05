import {ComponentType} from "react";
import {Params, useParams} from "react-router-dom";

export function withRouter<T> (Component: ComponentType<T>) {
    return (function ComponentWithRouterProp(props: T &  Readonly<Params<string>>) {
        let params = useParams();
        return <Component {...props} router={{params }} />;
    });
};
