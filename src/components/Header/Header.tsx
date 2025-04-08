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
                <Link href="/favourites" className={styles.cartLink}>
                    <Image src="/like.svg" alt="like" width={24} height={25} />
                </Link>
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