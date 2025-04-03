'use client';

import { products } from '@/data/products';
import { Header } from '@/components/Header/Header';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { useCart } from '@/hooks/useCart';
import styles from './page.module.css';

export default function Home() {
  const { addToCart, getTotalItems } = useCart();

  return (
    <main className={styles.main}>
      <Header cartItemsCount={getTotalItems()} />
      <section>
        <h2 className={styles.title}>Наушники</h2>
        <div className={styles.grid}>
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className={styles.title}>Беспроводные наушники</h2>
        <div className={styles.grid}>
          {products.slice(3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
