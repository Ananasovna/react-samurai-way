import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {StateType} from "../../redux/store";
import {ComponentType} from "react";
import {compose} from "redux";


const mapStateToProps = (state: StateType) => {
    return {
        data: state.sidebar,
    }
}

export const NavbarContainer = compose<ComponentType>(connect(mapStateToProps))(Navbar)