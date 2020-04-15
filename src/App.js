import React from 'react';
import styles from './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App(props) {
    return (
        <div className={styles.app}>
            <Header contentLanguage={props.contentLanguage}
                    languageStatus={props.languageStatus}
                    dispatch={props.dispatch}
                    isShowMenu={props.isShowMenu}
                    switchMenu={props.switchMenu}
                    offMenu={props.offMenu}
             />
            <Content contentLanguage={props.contentLanguage}/>
            <Footer contentLanguage={props.contentLanguage}/>
        </div>
    );
}

export default App;
