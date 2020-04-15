const CHANGE_LANGUAGE = 'CHANGE-LANGUAGE';
const SWITCH_MENU = 'SWITCH-MENU';
const OFF_MENU = 'OFF-MENU';


const menuReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            state.languageStatus
                ? state.languageStatus = false
                : state.languageStatus = true;
            return state;
        case SWITCH_MENU:
            state.isShowMenu
                ? state.isShowMenu = false
                : state.isShowMenu = true;
            return state;
        case OFF_MENU:
            if (state.isShowMenu === true){
                state.isShowMenu = false
            }
            return state;
        default:
            return state;
    };
};


export const changeLanguageAC =() => ({type: CHANGE_LANGUAGE});
export const switchMenuAC =() => ({type: SWITCH_MENU});
export const offMenuAC =() => ({type: OFF_MENU});
export default menuReducer;