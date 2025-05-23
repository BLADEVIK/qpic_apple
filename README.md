# Описание проекта : QPIC_APPLE
- Проект представляет собой веб-приложение для онлайн-магазина,   специализирующегося на продаже наушников и других аудиоустройств. Приложение разработано с использованием React и Next.js, что позволяет создавать динамичные и отзывчивые пользовательские интерфейсы. Основные функции включают просмотр продуктов, добавление их в корзину, управление избранными товарами и оформление заказов.
## Структура проекта
- Компоненты:
- Header: Отображает логотип магазина, количество товаров в корзине и избранном.
- Footer: Содержит ссылки на страницы, такие как "Избранное", "Корзина" и "Контакты", а также переключатель языков.
- ProductCard: Отображает информацию о каждом продукте, включая изображение, название, цену и кнопку для добавления в корзину или избранное.
- CartItem: Отображает товары в корзине с возможностью изменения количества и удаления товара.
- Modal: Компонент для отображения модальных окон, например, для оформления заказа.
- CheckoutForm: Форма для ввода данных при оформлении заказа.
## Страницы:
- Home: Главная страница, на которой отображаются продукты, разделенные на категории (проводные и беспроводные).
- Cart: Страница корзины, где пользователи могут просмотреть добавленные товары, изменить их количество и перейти к оформлению заказа.
- Favourites: Страница избранных товаров, где пользователи могут просмотреть сохраненные продукты.
## Хуки:
- useCart: Хук для управления состоянием корзины, включая добавление, удаление и обновление количества товаров.
- useFavorites: Хук для управления состоянием избранных товаров, включая добавление и удаление из избранного.
## Логика работы компонентов
- Header:
Получает количество товаров в корзине и избранном через пропсы.
Отображает соответствующие иконки и счетчики.
- Footer:
Содержит навигацию по страницам и переключатель языков.
Позволяет пользователю переключаться между русским и английским языками.
- ProductCard:
Принимает данные о продукте через пропсы.
Отображает изображение, название и цену продукта.
Позволяет пользователю добавлять продукт в корзину или избранное.
- CartItem:
Принимает данные о товаре в корзине через пропсы.
Позволяет изменять количество товара и удалять его из корзины.
Отображает изображение, название и цену товара.
- Modal:
Отображает содержимое, переданное через пропсы, если модальное окно открыто.
Закрывает модальное окно при клике на фон или на кнопку закрытия.
- CheckoutForm:
Принимает общую сумму заказа и функцию для обработки отправки формы через пропсы.
Содержит поля для ввода имени, email, телефона и данных карты.
Обрабатывает отправку формы и вызывает функцию для обработки данных заказа.
## Хуки
- useCart:
Инициализирует состояние корзины из sessionStorage.
Обеспечивает функции для добавления, удаления и обновления товаров в корзине.
Рассчитывает общую стоимость и количество товаров в корзине.
- useFavorites:
Инициализирует состояние избранных товаров из sessionStorage.
Обеспечивает функции для добавления и удаления товаров из избранного.
Рассчитывает общее количество избранных товаров.
## Заключение
- Проект представляет собой полноценное веб-приложение для онлайн-магазина, которое позволяет пользователям удобно просматривать и заказывать товары. Компоненты и хуки организованы таким образом, чтобы обеспечить простоту и удобство использования, а также легкость в управлении состоянием приложения.