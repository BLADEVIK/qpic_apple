'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import { useState } from 'react';

const Footer = () => {
    const [activeLanguage, setActiveLanguage] = useState('ru');

    const handleLanguageChange = () => {
        if (activeLanguage === 'ru') {
            setActiveLanguage('en')
        }
        if (activeLanguage === 'en') {
            setActiveLanguage('ru')
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    QPICK
                </Link>
                <nav className={styles.nav}>
                    <Link href="/favourites">Избранное</Link>
                    <Link href="/cart">Корзина</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>
                <nav className={styles.seviceLanguage}>
                    <Link className={styles.terms} href="/terms">Условия сервиса</Link>
                    <div className={styles.language}>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <Image src="/language.svg" alt="VK" width={31} height={21} />
                        </Link>
                        <span
                            onClick={() => handleLanguageChange()}
                            className={classNames({ [styles.languageActive]: activeLanguage === 'ru', [styles.languageInactive]: activeLanguage === 'en' })}
                        >
                            Рус
                        </span>
                        <span
                            onClick={() => handleLanguageChange()}
                            className={classNames({ [styles.languageActive]: activeLanguage === 'en', [styles.languageInactive]: activeLanguage === 'ru' })}
                        >
                            Eng
                        </span>
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