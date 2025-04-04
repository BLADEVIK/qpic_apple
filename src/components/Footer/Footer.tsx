import Link from 'next/link';
// import { FaVk, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'; // Import icons
import styles from './Footer.module.css';
import Image from 'next/image';
import classNames from 'classnames';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    QPICK
                </Link>
                <nav className={styles.nav}>
                    <Link href="/favorites">Избранное</Link>
                    <Link href="/cart">Корзина</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>
                <nav className={styles.seviceLanguage}>
                    <Link className={styles.terms} href="/terms">Условия сервиса</Link>
                    <div className={styles.language}>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <Image src="/language.svg" alt="VK" width={31} height={21} />
                        </Link>
                        <Link href="#" className={styles.languageActive}>Рус</Link>
                        <Link href="#" className={classNames(styles.languageActive, styles.languageInactive)}>Eng</Link>
                    </div>
                </nav>

                <div className={styles.socials}>
                    <Link href="https://vk.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Image src="/VK.svg" alt="VK" width={31} height={21} />
                    </Link>
                    <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Image src="/Telegram.svg" alt="Telegram" width={31} height={31} />
                    </Link>
                    <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Image src="/Whatsapp.svg" alt="WhatsApp" width={31} height={31} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;