import React from 'react';
import About from "./Blocks/About/About";
import Skills from "./Blocks/Skills/Skills";
import Works from "./Blocks/Works/Works";
import Hunting from "./Blocks/Hunting/Hunting";
import Contacts from "./Blocks/Contacts/Contacts";
import * as Scroll from 'react-scroll';

let Element = Scroll.Element;

function Content(props) {
    return (
        <div className="content">
            <Element name='about'>
                <About state={props.contentLanguage.about}/>
            </Element>
            <Element name='skills'>
                <Skills skills={props.contentLanguage.skills}/>
            </Element>
            <Element name='works'>
                <Works works={props.contentLanguage.works}/>
            </Element>
            <Hunting hunting={props.contentLanguage.hunting}/>
            <Element name='contact'>
                <Contacts contactMe={props.contentLanguage.contactMe}/>
            </Element>
        </div>
    );
}

export default Content;
