import {contentLanguage} from "./redux/language";

const CHANGE_LANGUAGE = 'CHANGE-LANGUAGE';
const SWITCH_MENU = 'SWITCH-MENU';
const OFF_MENU = 'OFF-MENU';

let initialState = {
        languageStatus: true,
        isShowMenu: false,
        currentLanguage: contentLanguage.rus
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:{
            let stateCopy = {...state};
            if (state.languageStatus === true){
                stateCopy.languageStatus = false;
                stateCopy.currentLanguage = contentLanguage.eng
            } else {
                stateCopy.languageStatus = true;
                stateCopy.currentLanguage = contentLanguage.rus
            }
            return stateCopy;
        }
        case SWITCH_MENU: {
            let stateCopy = {...state};
            state.isShowMenu
                ? stateCopy.isShowMenu = false
                : stateCopy.isShowMenu = true;
            return stateCopy;}
        case OFF_MENU: {
            let stateCopy = {...state};
            if (state.isShowMenu === true){
                stateCopy.isShowMenu = false
            }
            return stateCopy;
        }
        default:
            return state;
    };
};


export const changeLanguageAC =() => ({type: CHANGE_LANGUAGE});
export const switchMenuAC =() => ({type: SWITCH_MENU});
export const offMenuAC =() => ({type: OFF_MENU});
export default menuReducer;