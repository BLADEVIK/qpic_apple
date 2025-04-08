import { IProduct } from '@/types/types';
import { useState, useEffect } from 'react';

export const useFavorites = () => {
    const [favoriteItems, setFavoriteItems] = useState<IProduct[]>([]);

    useEffect(() => {
        const savedFavorites = sessionStorage.getItem('favorites');
        if (savedFavorites) {
            setFavoriteItems(JSON.parse(savedFavorites));
        }
    }, []);

    const saveFavorites = (items: IProduct[]) => {
        sessionStorage.setItem('favorites', JSON.stringify(items));
        setFavoriteItems(items);
    };

    const addToFavorites = (product: IProduct) => {
        if (!isInFavorites(product.id)) {
            saveFavorites([...favoriteItems, product]);
        }
    };

    const removeFromFavorites = (productId: number) => {
        saveFavorites(favoriteItems.filter(item => item.id !== productId));
    };

    const isInFavorites = (productId: number) => {
        return favoriteItems.some(item => item.id === productId);
    };

    const toggleFavorite = (product: IProduct) => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const getFavoritesCount = () => {
        return favoriteItems.length;
    };

    return {
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
        toggleFavorite,
        getFavoritesCount
    };
};