import reactIcon from './assets/img/react.svg';
import jsIcon from './assets/img/js.svg';
import htmlIcon from './assets/img/htmlCss.svg';
import imageWorkSocial from './assets/img/work1.jpg';
import imageWorkExamp from './assets/img/work2.jpg';
import menuReducer from "./menu-reducer";


let store = {

    state: {
        languageStatus: true,
        isShowMenu: false,
        rus: {
            index: 'rus',
            navMenu: [
                {
                    id: 0,
                    name: 'Главная',
                    link: 'about',
                }, {
                    id: 1,
                    name: 'Навыки',
                    link: 'skills',
                }, {
                    id: 2,
                    name: 'Проекты',
                    link: 'works',
                }, {
                    id: 3,
                    name: 'Контакты',
                    link: 'contact',
                }
            ],
            about: {
                hello: 'Привет, меня зовут',
                name: 'Вячеслав Шелудков',
                whoAmI: 'Я React-разработчик'
            },
            skills: {
                title: 'Навыки',
                skillsBlocks: [
                    {
                        id: 0,
                        name: 'React/Redux',
                        description: 'По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов ',
                        icon: reactIcon
                    }, {
                        id: 1,
                        name: 'Java Script',
                        description: 'По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов ',
                        icon: jsIcon
                    }, {
                        id: 2,
                        name: 'HTML/CSS',
                        description: 'По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов По русски написано куча слов ',
                        icon: htmlIcon
                    },
                ]
            },
            works: {
                title: 'Работы',
                worksBlocks: [
                    {
                        name: 'Социальная сеть',
                        description: 'Данная работа была выполнена в рамках обучения технологиям React/Redux в компании IT-incubator.',
                        image: imageWorkSocial,
                        link: '',
                        id: 0
                    },
                    {
                        name: 'Примеры работ',
                        description: 'Различные тестовые задания',
                        image: imageWorkExamp,
                        link: '',
                        id: 1
                    },
                ]

            },
            hunting: {
                title: 'Ищу работу',
                description: 'Junior Front-end разработчик. Проходил обучение в Geek-Brains на факультете "Вэб-разработка", "IT-Incubator" React, Redux, TypeScript и самостоятельно.\n' +
                    'Остановил свой выбор на следующем стеке технологий: JavaScript, React/Redux, TypeScript, HTML, CSS. Умею верстать, знаком с CSS-препроцессорами.\n' +
                    'Готов к переезду',
                button: 'Связаться',
                link: ''
            },
            contactMe: {
                title: 'Свяжитесь со мной',
                button: 'Отправить'
            },
            footer: {
                name: 'Вячеслав Шелудков, React developer'
            }
        },
        eng: {
            index: 'eng',
            navMenu: [
                {
                    id: 0,
                    name: 'Home',
                    link: 'about',
                }, {
                    id: 1,
                    name: 'Skills',
                    link: 'skills',
                }, {
                    id: 2,
                    name: 'Projects',
                    link: 'works',
                }, {
                    id: 3,
                    name: 'Contacts',
                    link: 'contact',
                }
            ],
            about: {
                hello: 'Hello!',
                name: ' I\'m Vyacheslav (Shel) Sheludkov',
                whoAmI: 'I React developer'
            },
            skills: {
                title: 'Skills',
                skillsBlocks: [
                    {
                        id: 0,
                        name: 'React/Redux',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                        icon: reactIcon
                    }, {
                        id: 1,
                        name: 'Java Script',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                        icon: jsIcon
                    }, {
                        id: 2,
                        name: 'HTML/CSS',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                        icon: htmlIcon
                    },
                ]
            },
            works: {
                title: 'My Works',
                worksBlocks: [
                    {
                        name: 'Social Network',
                        description: 'This work was carried out as part of training for React / Redux technologies at IT-incubator.',
                        image: imageWorkSocial,
                        link: '',
                        id: 0

                    },
                    {
                        name: 'Work Examples',
                        description: 'Various test tasks',
                        image: imageWorkExamp,
                        link: '',
                        id: 1
                    },
                ]

            },
            hunting: {
                title: 'Hunting',
                description: 'Junior Front-end developer. I Studied at Geek-Brains at the faculty of Web Development. ' +
                    'IT-Incubator, React, Redux, TypeScript and independently. ' +
                    'I chose the following technology stack: JavaScript, React / Redux, TypeScript, HTML, CSS. Ready to relocate.',
                link: '',
                button: 'contact me',
            },
            contactMe: {
                title: 'Contact Me',
                button: 'Send'
            },
            footer: {
                name: 'Vyacheslav (Shel) Sheludkov, React developer'
            }
        },
    },
    getState() {
        return this.state
    },
    getLanguageStatus() {
        return this.state.languageStatus
    },
    getIsShowMenu() {
        return this.state.isShowMenu
    },
    callSubscriber() {
        console.log('changed')
    },

    languageShow() {
        let contentLanguage = this.state.languageStatus
            ? this.state.rus
            : this.state.eng;
        return contentLanguage
    },

    subscribe(observer) {
        this.callSubscriber = observer;
    },
    dispatch(action) {
        menuReducer(this.state, action);
        this.callSubscriber()

    },
};

export default store