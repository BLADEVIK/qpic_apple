import Image from 'next/image';
import { IProduct } from '@/types/types';
import styles from './ProductCard.module.css';
import { StarIcon } from '@/components/Icons/StarIcon';

interface ProductCardProps {
    product: IProduct;
    onAddToCart: (product: IProduct) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <Image
                src={product.img}
                alt={product.title}
                width={220}
                height={220}
                className={styles.image}
            />
            <h3 className={styles.title}>{product.title}</h3>
            <div className={styles.priceRow}>
                <span className={styles.price}>{product.price} ₽</span>
                <div className={styles.rating}>
                    <StarIcon />
                    <span>{product.rate}</span>
                </div>
            </div>
            <button
                className={styles.button}
                onClick={() => onAddToCart(product)}
            >
                Купить
            </button>
        </div>
    );
}; 