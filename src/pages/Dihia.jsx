import styles from '../assets/css/Dihia.module.css';
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next';

function Dihia() {

    const { t } = useTranslation('dihia');

    const { theme } = useTheme(); 
    const isDarkMode = theme === 'dark'; 

    const dihiawrapClass = isDarkMode ? `${styles.dihiawrap} ${styles.darkMode}` : styles.dihiawrap;

    return (
        <>
            <div className={dihiawrapClass}>
                <div className={styles.moon}></div>

                <div className={styles.container}>
                    <h1 className={styles.title}>{t('title')}</h1>
                        <ul className={styles.ul}>
                            <li className={styles.slideanimation}>{t('legend_1')}</li>
                            <li className={styles.slideanimation}>{t('legend_2')}</li>
                            <li className={styles.slideanimation}>{t('legend_3')}</li>
                            <li className={styles.slideanimation}>{t('legend_4')}</li>
                            <li className={styles.slideanimation}>{t('legend_5')}</li>
                            <li className={styles.slideanimation}>{t('legend_6')}</li>
                            <li className={styles.slideanimation}>{t('legend_7')}</li>
                            <li className={styles.slideanimation}>{t('legend_8')}</li>
                            <li className={styles.slideanimation}>{t('legend_9')}</li>
                            <li className={styles.slideanimation}>{t('legend_10')}</li>
                            <li className={styles.slideanimation}>{t('legend_11')}</li>
                            <li className={styles.slideanimation}>{t('legend_12')}</li>
                            <li className={styles.slideanimation}>{t('legend_13')}</li>
                            <li className={styles.slideanimation}>{t('legend_14')}</li>
                            <li className={styles.slideanimation}>{t('legend_15')}</li>
                            <li className={styles.slideanimation}>{t('legend_16')}</li>
                            <li className={styles.slideanimation}>{t('legend_17')}</li>
                            <li className={styles.slideanimation}>{t('legend_18')}</li>
                            <li className={styles.slideanimation}>{t('legend_19')}</li>
                            <li className={styles.slideanimation}>{t('legend_20')}</li>
                            <li className={styles.slideanimation}>{t('legend_21')}</li>
                            <li className={styles.slideanimation}>{t('legend_22')}</li>
                            <li className={styles.slideanimation}>{t('legend_23')}</li>
                            <li className={styles.slideanimation}>{t('legend_24')}</li>
                            <li className={styles.slideanimation}>{t('legend_25')}</li>
                            <li className={styles.slideanimation}>{t('legend_26')}</li>
                            <li className={styles.slideanimation}>{t('legend_27')}</li>
                            <li className={styles.slideanimation}>{t('legend_28')}</li>
                        </ul>

                </div>


                <div className={styles.backgroundwrap}>
                    <div className={`${styles.bubble} ${styles.x1}`}></div>
                    <div className={`${styles.bubble} ${styles.x2}`}></div>
                    <div className={`${styles.bubble} ${styles.x3}`}></div>
                    <div className={`${styles.bubble} ${styles.x4}`}></div>
                    <div className={`${styles.bubble} ${styles.x5}`}></div>
                    <div className={`${styles.bubble} ${styles.x6}`}></div>
                    <div className={`${styles.bubble} ${styles.x7}`}></div>
                    <div className={`${styles.bubble} ${styles.x8}`}></div>
                    <div className={`${styles.bubble} ${styles.x9}`}></div>
                    <div className={`${styles.bubble} ${styles.x10}`}></div>
                </div>
            </div>
        </>
    );
}

export default Dihia;
