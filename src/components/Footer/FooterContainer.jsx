import {connect} from "react-redux";
import Footer from "./Footer";

let mapStateToProps = (state) => {
    return {
        name: state.menuReducer.currentLanguage.footer.name,
    }};

const FooterContainer = connect(mapStateToProps) (Footer);

export default FooterContainer;
