'use client';

import { Header } from '@/components/Header/Header';
import { CartItem } from '@/components/CartItem/CartItem';
import styles from './page.module.css';
import { useFavorites } from '@/hooks/useFavorites';
import { useMemo } from 'react';

export default function Favourites() {
    const {
        favoriteItems,
        removeFromFavorites,
        updateQuantity,
        getFavoritesCount
    } = useFavorites();

    // Функция для подсчета общей суммы цен товаров в избранном
    const totalPrice = useMemo(() => {
        return favoriteItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [favoriteItems]);

    return (
        <main className={styles.main}>
            <Header cartItemsCount={0} favoritesCount={getFavoritesCount()} />
            {favoriteItems.length > 0 ? (
                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        {favoriteItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemove={() => removeFromFavorites(item.id)}
                            />
                        ))}
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.total}>
                            <span>ИТОГО</span>
                            <span className={styles.totalPrice}>{totalPrice} ₽</span>
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
