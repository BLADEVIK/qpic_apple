import { IProduct, ICartItem } from '@/types/types';
import { useState, useEffect } from 'react';

export const useFavorites = () => {
    const [favoriteItems, setFavoriteItems] = useState<ICartItem[]>([]);

    useEffect(() => {
        const savedFavorites = sessionStorage.getItem('favorites');
        if (savedFavorites) {
            setFavoriteItems(JSON.parse(savedFavorites));
        }
    }, []);

    const saveFavorites = (items: ICartItem[]) => {
        sessionStorage.setItem('favorites', JSON.stringify(items));
        setFavoriteItems(items);
    };

    const addToFavorites = (product: IProduct) => {
        if (!isInFavorites(product.id)) {
            saveFavorites([...favoriteItems, { ...product, quantity: 1 }]);
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

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) {
            removeFromFavorites(productId);
            return;
        }

        const updatedItems = favoriteItems.map(item =>
            item.id === productId ? { ...item, quantity } : item
        );
        saveFavorites(updatedItems);
    };

    const getFavoritesCount = () => {
        return favoriteItems.reduce((total, item) => total + item.quantity, 0);
    };

    return {
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
        toggleFavorite,
        updateQuantity,
        getFavoritesCount
    };
};