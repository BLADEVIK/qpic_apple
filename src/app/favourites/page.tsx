'use client';

import { Header } from '@/components/Header/Header';
import { CartItem } from '@/components/CartItem/CartItem';
import styles from './page.module.css';
import { useFavorites } from '@/hooks/useFavorites';

export default function Favourites() {
    const {
        favoriteItems,
        removeFromFavorites,
        getFavoritesCount
    } = useFavorites();

    return (
        <main className={styles.main}>
            <Header cartItemsCount={0} favoritesCount={getFavoritesCount()} />
            {favoriteItems.length > 0 ? (
                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        {favoriteItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={{ ...item, quantity: 1 }}
                                onUpdateQuantity={() => { }}
                                onRemove={() => removeFromFavorites(item.id)}
                            />
                        ))}
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.total}>
                            <span>ИТОГО</span>
                            <span className={styles.totalPrice}>0 ₽</span>
                        </div>
                        <button className={styles.checkoutButton}>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.empty}>
                    <h2>В избранном пусто</h2>
                </div>
            )}
        </main>
    );
}
