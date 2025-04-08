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

    // Функция для подсчета общей суммы цен товаров в избранном
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
        // Здесь можно добавить логику отправки заказа на сервер
        console.log('Заказ оформлен:', formData);
        console.log('Товары:', favoriteItems);
        console.log('Общая сумма:', totalPrice);

        // Закрываем модальное окно
        setIsCheckoutModalOpen(false);

        // Очищаем избранное после успешного оформления заказа
        // Это можно сделать, добавив функцию clearFavorites в хук useFavorites
        // clearFavorites();

        // Показываем сообщение об успешном оформлении заказа
        alert('Заказ успешно оформлен! Спасибо за покупку!');
    };

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
                    <h2>В избранном пусто</h2>
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
