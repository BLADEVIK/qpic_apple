import { IProduct, ICartItem } from '@/types/types'; // Импортируем интерфейсы для товара и элемента корзины
import { useState, useEffect } from 'react'; // Импортируем useState и useEffect

// Хук для работы с избранным
export const useFavorites = () => {
    const [favoriteItems, setFavoriteItems] = useState<ICartItem[]>([]); // Состояние для избранных товаров

    useEffect(() => {
        const savedFavorites = sessionStorage.getItem('favorites'); // Получаем сохраненные избранные товары из sessionStorage
        if (savedFavorites) {
            setFavoriteItems(JSON.parse(savedFavorites)); // Устанавливаем избранные товары из сохраненных данных
        }
    }, []);

    // Функция для сохранения избранных товаров в sessionStorage
    const saveFavorites = (items: ICartItem[]) => {
        sessionStorage.setItem('favorites', JSON.stringify(items)); // Сохраняем избранные товары
        setFavoriteItems(items); // Обновляем состояние избранных товаров
    };

    // Функция для добавления товара в избранное
    const addToFavorites = (product: IProduct) => {
        if (!isInFavorites(product.id)) {
            saveFavorites([...favoriteItems, { ...product, quantity: 1 }]); // Добавляем новый товар в избранное
        }
    };

    // Функция для удаления товара из избранного
    const removeFromFavorites = (productId: number) => {
        saveFavorites(favoriteItems.filter(item => item.id !== productId)); // Удаляем товар и сохраняем обновленное избранное
    };

    // Функция для проверки, находится ли товар в избранном
    const isInFavorites = (productId: number) => {
        return favoriteItems.some(item => item.id === productId); // Проверяем наличие товара в избранном
    };

    // Функция для переключения товара в избранном
    const toggleFavorite = (product: IProduct) => {
        if (isInFavorites(product.id)) {
            removeFromFavorites(product.id); // Удаляем товар из избранного
        } else {
            addToFavorites(product); // Добавляем товар в избранное
        }
    };

    // Функция для обновления количества товара в избранном
    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) {
            removeFromFavorites(productId); // Удаляем товар, если количество меньше 1
            return;
        }

        const updatedItems = favoriteItems.map(item =>
            item.id === productId ? { ...item, quantity } : item // Обновляем количество товара
        );
        saveFavorites(updatedItems); // Сохраняем обновленное избранное
    };

    // Функция для получения общего количества избранных товаров
    const getFavoritesCount = () => {
        return favoriteItems.reduce((total, item) => total + item.quantity, 0); // Считаем общее количество избранных товаров
    };

    return {
        favoriteItems, // Возвращаем избранные товары
        addToFavorites, // Возвращаем функцию добавления товара в избранное
        removeFromFavorites, // Возвращаем функцию удаления товара из избранного
        isInFavorites, // Возвращаем функцию проверки наличия товара в избранном
        toggleFavorite, // Возвращаем функцию переключения товара в избранном
        updateQuantity, // Возвращаем функцию обновления количества товара
        getFavoritesCount // Возвращаем функцию получения общего количества избранных товаров
    };
};