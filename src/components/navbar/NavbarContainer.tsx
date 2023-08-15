import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {StateType} from "../../redux/store";


const mapStateToProps = (state: StateType) => {
    return {
        data: state.sidebar,
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)