'use client';

import { products } from '@/data/products';
import { Header } from '@/components/Header/Header';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { useCart } from '@/hooks/useCart';
import styles from './page.module.css';
import { useFavorites } from '@/hooks/useFavorites';

export default function Home() {
  const { addToCart, getTotalItems } = useCart();
  const { addToFavorites, getFavoritesCount } = useFavorites();
  return (
    <main className={styles.main}>
      <Header cartItemsCount={getTotalItems()} favoritesCount={getFavoritesCount()} />
      <section>
        <h2 className={styles.title}>Наушники</h2>
        <div className={styles.grid}>
          {products
            .filter(product => product.feature === "wired")
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onAddToFavorites={addToFavorites}
              />
            ))}
        </div>
      </section>
      <section>
        <h2 className={styles.title}>Беспроводные наушники</h2>
        <div className={styles.grid}>
          {products
            .filter(product => product.feature === "wireless")
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onAddToFavorites={addToFavorites}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
