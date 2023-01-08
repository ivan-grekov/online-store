import React from 'react';

import styles from './Footer.module.scss';
import course from '../../assets/svg/rs_school_js.svg';
import github from '../../assets/svg/github.svg';

// console.log(course);

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.logo_course}>
            <a
              href="https://rs.school/js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                src={course}
                alt="Logo Course"
                className={`${styles.logo} ${styles.logo_course__item}`}
              />
            </a>
          </div>
          <div className="data">2023</div>
          <div className={styles.logo_github}>
            <div className={`${styles.logo_github__ivan} ${styles.tooltip}`}>

                <a
                  href="https://github.com/ivan-grekov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  <img
                    src={github}
                    alt="Logo github"
                    className={`${styles.logo} ${styles.logo_github__item}`}
                  />

                </a><span className={styles.tooltiptext}>Ivan-Grekov</span>

            </div>
            <div className={`${styles.logo_github__spirit} ${styles.tooltip}`}>
              <a
                href="https://github.com/SpiriT-L"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <img
                  src={github}
                  alt="Logo github"
                  className={`${styles.logo} ${styles.logo_github__item}`}
                />

              </a>
              <span className={styles.tooltiptext}>SpiriT-L</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
