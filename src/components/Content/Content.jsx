import React from 'react';
import About from "./Blocks/About/About";
import Skills from "./Blocks/Skills/Skills";
import Works from "./Blocks/Works/Works";
import Hunting from "./Blocks/Hunting/Hunting";
import * as Scroll from 'react-scroll';
import ContactContainer from "./Blocks/Contacts/ContactsContainer";

let Element = Scroll.Element;

function Content(props) {
    return (
        <div className="content">
            <Element name='about'>
                <About state={props.about}/>
            </Element>
            <Element name='skills'>
                <Skills skills={props.skills}/>
            </Element>
            <Element name='works'>
                <Works works={props.works}/>
            </Element>
            <Hunting hunting={props.hunting}/>
            <Element name='contact'>
                <ContactContainer />
            </Element>
        </div>
    );
}

export default Content;
