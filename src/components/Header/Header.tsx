import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

interface HeaderProps {
    cartItemsCount: number;
}

export const Header = ({ cartItemsCount }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                QPICK
            </Link>
            <div className={styles.right}>
                <div className={styles.socials}>
                    <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Image src="/VK.svg" alt="VK" width={31} height={21} />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Image src="/Telegram.svg" alt="Telegram" width={31} height={31} />
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <Image src="/Whatsapp.svg" alt="WhatsApp" width={31} height={31} />
                    </a>
                </div>
                <Link href="/cart" className={styles.cartLink}>
                    <Image src="/basket.svg" alt="Cart" width={24} height={25} />
                    {cartItemsCount > 0 && (
                        <span className={styles.cartCount}>{cartItemsCount}</span>
                    )}
                </Link>
            </div>
        </header>
    );
}; 