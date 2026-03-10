# Каталог пользователей

Страница-каталог пользователей на React + TypeScript с использованием [DummyJSON API](https://dummyjson.com/docs/users).

## Возможности

- Карточки пользователей с аватаром, именем, email, телефоном, компанией и городом
- Поиск по имени с debounce
- Пагинация (10 пользователей на страницу)
- Скелетон-загрузка
- Обработка ошибок с кнопкой повтора

## Запуск

### Требования

- Node.js 18+
- npm

### Установка

```bash
npm install
```

### Разработка

```bash
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Продакшн-сборка

```bash
npm run build
npm run preview
```

## Стек

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/)
- [TanStack Query v5](https://tanstack.com/query)
- [Tailwind CSS v4](https://tailwindcss.com/) - использовал для скорости, но свободно работаю и с чистым CSS / CSS Modules / любым другим подходом

## Тесты

Тестами не покрывал намеренно из-за простоты приложения - бизнес-логики минимум, основная функциональность сводится к fetch + рендер.
