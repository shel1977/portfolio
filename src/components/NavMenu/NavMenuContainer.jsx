import {offMenuAC, switchMenuAC} from "../../menu-reducer";
import {connect} from "react-redux";
import NavMenu from "./NavMenu";

let mapDispatchToProps = (dispatch) => {
    return {
        switchMenu: () => {
            dispatch(switchMenuAC())
        },
        offMenu: () => {
            dispatch(offMenuAC())
        }

    }
};

let mapStateToProps = (state) => {
    return {
        navMenu: state.menuReducer.currentLanguage.navMenu,
        isShowMenu: state.menuReducer.isShowMenu

    }}

const NavMenuContainer = connect(mapStateToProps, mapDispatchToProps) (NavMenu);


export default NavMenuContainer;
