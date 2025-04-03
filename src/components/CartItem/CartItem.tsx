import Image from 'next/image';
import { ICartItem } from '@/types/types';
import styles from './CartItem.module.css';

interface CartItemProps {
    item: ICartItem;
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
    return (
        <div className={styles.item}>
            <Image
                src={item.img}
                alt={item.title}
                width={150}
                height={150}
                className={styles.image}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.price}>{item.price} ₽</p>
                <div className={styles.controls}>
                    <div className={styles.quantity}>
                        <button
                            className={styles.quantityButton}
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            className={styles.quantityButton}
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className={styles.deleteButton}
                        onClick={() => onRemove(item.id)}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
}; 