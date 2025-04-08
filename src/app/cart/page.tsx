'use client';

import { Header } from '@/components/Header/Header';
import { CartItem } from '@/components/CartItem/CartItem';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import styles from './page.module.css';
import { useState } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { CheckoutForm, CheckoutFormData } from '@/components/CheckoutForm/CheckoutForm';

export default function Cart() {
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
        getTotalItems
    } = useCart();

    const { getFavoritesCount } = useFavorites();

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    const handleCheckout = () => {
        setIsCheckoutModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsCheckoutModalOpen(false);
    };

    const handleSubmitOrder = (formData: CheckoutFormData) => {
        // Здесь можно добавить логику отправки заказа на сервер
        console.log('Заказ оформлен:', formData);
        console.log('Товары:', cartItems);
        console.log('Общая сумма:', getTotalPrice());

        // Закрываем модальное окно
        setIsCheckoutModalOpen(false);

        // Очищаем корзину после успешного оформления заказа
        // Это можно сделать, добавив функцию clearCart в хук useCart
        // clearCart();

        // Показываем сообщение об успешном оформлении заказа
        alert('Заказ успешно оформлен! Спасибо за покупку!');
    };

    return (
        <main className={styles.main}>
            <Header cartItemsCount={getTotalItems()} favoritesCount={getFavoritesCount()} />
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
                    <h2>Корзина пуста</h2>
                </div>
            )}

            <Modal isOpen={isCheckoutModalOpen} onClose={handleCloseModal}>
                <CheckoutForm
                    totalAmount={getTotalPrice()}
                    onSubmit={handleSubmitOrder}
                />
            </Modal>
        </main>
    );
}
