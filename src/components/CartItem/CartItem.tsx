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
            <div className={styles.imageControls}>
                <Image
                    src={item.img}
                    alt={item.title}
                    width={140}
                    height={140}
                    className={styles.image}
                />
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
                    <Image className={styles.basket_red} src="/basket-red.svg" alt="basket-red" width={20} height={20} onClick={() => onRemove(item.id)} />
                </div>
            </div>

            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.price}>{item.price} ₽</p>

            </div>
        </div>
    );
}; 