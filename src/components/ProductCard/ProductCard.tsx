import Image from 'next/image';
import { IProduct } from '@/types/types';
import styles from './ProductCard.module.css';
import { StarIcon } from '@/components/Icons/StarIcon';

interface ProductCardProps {
    product: IProduct;
    onAddToCart: (product: IProduct) => void;
    onAddToFavorites: (product: IProduct) => void;
}

export const ProductCard = ({ product, onAddToCart, onAddToFavorites }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <Image
                src="./like.svg"
                alt="like"
                width={22}
                height={22}
                className={styles.imageLike}
                onClick={() => onAddToFavorites(product)}
            />
            <Image
                src={product.img}
                alt={product.title}
                width={220}
                height={220}
                className={styles.image}
            />
            <div className={styles.titlePrice}>
                <h3 className={styles.title}>{product.title}</h3>
                <div className={styles.prices}>
                    <span className={styles.price}>{product.price} ₽</span>
                    {(product.oldPrice ? (<span className={styles.oldPrice}>{product.oldPrice} ₽</span>) : (null))}
                </div>
            </div>
            <div className={styles.ratingBuy}>
                <div className={styles.rating}>
                    <StarIcon />
                    <span>{product.rate}</span>
                </div>

                <span className={styles.buy}
                    onClick={() => onAddToCart(product)} >
                    Купить
                </span>
            </div>
        </div>
    );
};