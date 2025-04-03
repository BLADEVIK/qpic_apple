'use client';

import { Header } from '@/components/Header/Header';
import { CartItem } from '@/components/CartItem/CartItem';
import { useCart } from '@/hooks/useCart';
import styles from './page.module.css';

export default function Cart() {
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
        getTotalItems
    } = useCart();

    return (
        <main className={styles.main}>
            <Header cartItemsCount={getTotalItems()} />
            {cartItems.length > 0 ? (
                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemove={removeFromCart}
                            />
                        ))}
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.total}>
                            <span>ИТОГО</span>
                            <span className={styles.totalPrice}>{getTotalPrice()} ₽</span>
                        </div>
                        <button className={styles.checkoutButton}>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.empty}>
                    <h2>Корзина пуста</h2>
                </div>
            )}
        </main>
    );
}
