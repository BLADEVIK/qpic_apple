import { ICartItem, IProduct } from '@/types/types'; // Импортируем интерфейсы для товара и элемента корзины
import { useState, useEffect } from 'react'; // Импортируем useState и useEffect

// Хук для работы с корзиной
export const useCart = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]); // Состояние для элементов корзины

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart'); // Получаем сохраненную корзину из sessionStorage
    if (savedCart) {
      setCartItems(JSON.parse(savedCart)); // Устанавливаем элементы корзины из сохраненных данных
    }
  }, []);

  // Функция для сохранения корзины в sessionStorage
  const saveCart = (items: ICartItem[]) => {
    sessionStorage.setItem('cart', JSON.stringify(items)); // Сохраняем корзину
    setCartItems(items); // Обновляем состояние корзины
  };

  // Функция для добавления товара в корзину
  const addToCart = (product: IProduct) => {
    const existingItem = cartItems.find(item => item.id === product.id); // Проверяем, есть ли товар в корзине
    
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 } // Увеличиваем количество товара
          : item
      );
      saveCart(updatedItems); // Сохраняем обновленную корзину
    } else {
      saveCart([...cartItems, { ...product, quantity: 1 }]); // Добавляем новый товар в корзину
    }
  };

  // Функция для удаления товара из корзины
  const removeFromCart = (productId: number) => {
    saveCart(cartItems.filter(item => item.id !== productId)); // Удаляем товар и сохраняем обновленную корзину
  };

  // Функция для обновления количества товара в корзине
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId); // Удаляем товар, если количество меньше 1
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item // Обновляем количество товара
    );
    saveCart(updatedItems); // Сохраняем обновленную корзину
  };

  // Функция для получения общей суммы заказа
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Считаем общую сумму
  };

  // Функция для получения общего количества товаров в корзине
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0); // Считаем общее количество товаров
  };

  return {
    cartItems, // Возвращаем элементы корзины
    addToCart, // Возвращаем функцию добавления товара в корзину
    removeFromCart, // Возвращаем функцию удаления товара из корзины
    updateQuantity, // Возвращаем функцию обновления количества товара
    getTotalPrice, // Возвращаем функцию получения общей суммы
    getTotalItems // Возвращаем функцию получения общего количества товаров
  };
};