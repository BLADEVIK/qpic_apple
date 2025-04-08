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
        const existingItem = favoriteItems.find(item => item.id === product.id);

        if (!existingItem) {
            saveFavorites([...favoriteItems, product]);
        }
    };

    const removeFromFavorites = (productId: number) => {
        saveFavorites(favoriteItems.filter(item => item.id !== productId));
    };

    const isInFavorites = (productId: number) => {
        return favoriteItems.some(item => item.id === productId);
    };

    const getFavoritesCount = () => {
        return favoriteItems.length;
    };

    return {
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
        getFavoritesCount
    };
};

// const { getFavoritesCount } = useFavorites();
// const favoritesCount = getFavoritesCount();