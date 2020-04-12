import React from 'react';
import styles from './Footer.module.css';
import facebook from './../../assets/img/facebook.svg';
import linkedin from './../../assets/img/linkedin.svg';
import mail from './../../assets/img/mail.svg';
import skype from './../../assets/img/skype.svg';

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.textName}>
                    {props.state.footer.name}
                </div>
                <div className={styles.socialNet}>
                    <a href="https://www.facebook.com/st.shel" target="_blank" rel="noopener" ><img src={facebook} className={styles.pictSocialNet}/></a>
                    <a href="https://www.linkedin.com/in/vyacheslav-sheludkov-7975a914b" target="_blank" rel="noopener"><img src={linkedin} className={styles.pictSocialNet}/></a>
                    <a href="mailto:vsheludkov@gmail.com.ru"><img src={mail} className={styles.pictSocialNet}/></a>
                    <a href="skype:st_shel?chat"><img src={skype} className={styles.pictSocialNet}/></a>
                </div>
                <div className={styles.copyright}>
                    &copy; V. Sheludkov. All right reserved
                </div>

            </div>
        </div>
    );
}

export default Footer;
