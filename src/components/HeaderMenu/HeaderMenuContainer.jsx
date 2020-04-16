import {changeLanguageAC} from "../../menu-reducer";
import {connect} from "react-redux";
import HeaderMenu from "./HeaderMenu";


let mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: () => {
            dispatch(changeLanguageAC())
        },
    }
};

let mapStateToProps = (state) => {
    return {
    languageStatus: state.menuReducer.languageStatus
}}

const HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps) (HeaderMenu);

export default HeaderMenuContainer;
