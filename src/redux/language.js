import reactIcon from "../assets/img/react.svg";
import jsIcon from "../assets/img/js.svg";
import htmlIcon from "../assets/img/htmlCss.svg";
import imageWorkSocial from "../assets/img/work1.jpg";
import imageWorkExamp from "../assets/img/work2.jpg";

export let contentLanguage = {
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
                    description: 'Redux-thunk, Router, Flux, Redux-form, Axios',
                    icon: reactIcon
                }, {
                    id: 1,
                    name: 'Java Script',
                    description: 'Нативный JS',
                    icon: jsIcon
                }, {
                    id: 2,
                    name: 'HTML/CSS',
                    description: 'Адаптивная верстка',
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
            description: 'Junior Front-end разработчик. Проходил обучение в Geek-Brains на факультете "Веб-разработка", "IT-Incubator" React, Redux, TypeScript и самостоятельно.\n' +
                'Остановил свой выбор на следующем стеке технологий: JavaScript, React/Redux, TypeScript, HTML, CSS. Умею верстать, знаком с CSS-препроцессорами.\n' +
                'Готов к переезду',
            button: 'Связаться',
            link: ''
        },
        contactMe: {
            title: 'Свяжитесь со мной',
            button: 'Отправить',
            sending: 'ОТПРАВКА',
            sendOk: 'СООБЩЕНИЕ ОТПРАВЛЕНО',
            sendErr: 'ОШИБКА, ПОПРОБУЙТЕ ПОЗЖЕ',
            placeholderName: 'Ваше имя',
            placeholderMail: 'E-mail',
            placeholderMessage: 'Сообщение',
            validateRequired: 'обязательное поле',
            validateMail: 'неправильный E-mail'
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
                    description: 'Redux-thunk, Router, Flux, Redux-form, Axios',
                    icon: reactIcon
                }, {
                    id: 1,
                    name: 'Java Script',
                    description: 'Native JS',
                    icon: jsIcon
                }, {
                    id: 2,
                    name: 'HTML/CSS',
                    description: 'Adaptive layout',
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
            title: 'Looking for a Job',
            description: 'Junior Front-end developer. I Studied at Geek-Brains at the faculty of Web Development. ' +
                'IT-Incubator, React, Redux, TypeScript and independently. ' +
                'I chose the following technology stack: JavaScript, React / Redux, TypeScript, HTML, CSS. Ready to relocate.',
            link: '',
            button: 'contact me',
        },
        contactMe: {
            title: 'Contact Me',
            button: 'Send',
            sending: 'SENDING',
            sendOk: 'MESSAGE IS SENT',
            sendErr: 'SOMETHING WRONG, TRY LATER',
            placeholderName: 'Your name',
            placeholderMail: 'E-mail',
            placeholderMessage: 'Your message',
            validateRequired: 'required field',
            validateMail: 'wrong E-mail'
        },
        footer: {
            name: 'Vyacheslav (Shel) Sheludkov, React developer'
        }
    },
}