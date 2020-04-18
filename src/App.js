import React from 'react';
import styles from './App.css';
import Header from "./components/Header/Header";
import ContentContainer from "./components/Content/ContentContainer";
import FooterContainer from "./components/Footer/FooterContainer";

function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <ContentContainer/>
            <FooterContainer/>
        </div>
    );
}

export default App;
