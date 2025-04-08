import React, { useState } from 'react';
import styles from './CheckoutForm.module.css';

interface CheckoutFormProps {
    totalAmount: number;
    onSubmit: (formData: CheckoutFormData) => void;
}

export interface CheckoutFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    cardNumber: string;
    cardExpiry: string;
    cardCvv: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ totalAmount, onSubmit }) => {
    const [formData, setFormData] = useState<CheckoutFormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={styles.checkoutForm}>
            <h2 className={styles.title}>Оформление заказа</h2>
            <p className={styles.totalAmount}>Итого к оплате: {totalAmount} ₽</p>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>



                <h3 className={styles.sectionTitle}>Данные карты</h3>

                <div className={styles.formGroup}>
                    <label htmlFor="cardNumber">Номер карты</label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>

                <div className={styles.cardDetails}>
                    <div className={styles.formGroup}>
                        <label htmlFor="cardExpiry">Срок действия</label>
                        <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cardCvv">CVV</label>
                        <input
                            type="text"
                            id="cardCvv"
                            name="cardCvv"
                            value={formData.cardCvv}
                            onChange={handleChange}
                            placeholder="123"
                            required
                        />
                    </div>
                </div>

                <button type="submit" className={styles.submitButton}>
                    Оплатить
                </button>
            </form>
        </div>
    );
};
