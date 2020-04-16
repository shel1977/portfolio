import {connect} from "react-redux";
import Content from "./Content";


let mapStateToProps = (state) => {
    return {
        about: state.menuReducer.currentLanguage.about,
        skills: state.menuReducer.currentLanguage.skills,
        works: state.menuReducer.currentLanguage.works,
        hunting: state.menuReducer.currentLanguage.hunting,
        contactMe: state.menuReducer.currentLanguage.contactMe,
    }};

const ContentContainer = connect(mapStateToProps) (Content);

export default ContentContainer;