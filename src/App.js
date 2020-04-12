import React from 'react';
import styles from './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App(props) {
    let language = props.state.language ? props.state.rus : props.state.eng;
    return (
        <div className={styles.app}>
            <Header state={language}
                    language={props.state.language}
                    changeLanguage={props.changeLanguage}
                    isShowMenu={props.state.isShowMenu}
                    switchMenu={props.switchMenu}
                    offMenu={props.offMenu}
             />
            <Content state={language}/>
            <Footer state={language}/>
        </div>
    );
}

export default App;
