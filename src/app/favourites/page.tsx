'use client';

import { Header } from '@/components/Header/Header';
import { CartItem } from '@/components/CartItem/CartItem';
import styles from './page.module.css';
import { useFavorites } from '@/hooks/useFavorites';
import { useMemo, useState } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { CheckoutForm, CheckoutFormData } from '@/components/CheckoutForm/CheckoutForm';

export default function Favourites() {
    const {
        favoriteItems,
        removeFromFavorites,
        updateQuantity,
        getFavoritesCount
    } = useFavorites();

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    const totalPrice = useMemo(() => {
        return favoriteItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [favoriteItems]);

    const handleCheckout = () => {
        setIsCheckoutModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCheckoutModalOpen(false);
    };

    const handleSubmitOrder = (formData: CheckoutFormData) => {

        console.log('Заказ оформлен:', formData);
        console.log('Товары:', favoriteItems);
        console.log('Общая сумма:', totalPrice);

        setIsCheckoutModalOpen(false);

        alert('Заказ успешно оформлен! Спасибо за покупку!');
    };

    return (
        <main className={styles.main}>
            <Header cartItemsCount={0} favoritesCount={getFavoritesCount()} />
            {favoriteItems.length > 0 ? (
                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        <h2 className={styles.titlePage}>Избранное</h2>
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
                        <button
                            className={styles.checkoutButton}
                            onClick={handleCheckout}
                        >
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.empty}>
                    <h2 className={styles.titleFavorites}>В избранном пусто</h2>
                </div>
            )}

            <Modal isOpen={isCheckoutModalOpen} onClose={handleCloseModal}>
                <CheckoutForm
                    totalAmount={totalPrice}
                    onSubmit={handleSubmitOrder}
                />
            </Modal>
        </main>
    );
}
