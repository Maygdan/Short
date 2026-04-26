# Short

Django REST API проект с системой пользователей и скринингом.

## Скачать проект

### Вариант 1: Git clone (рекомендуется)

```bash
git clone https://github.com/Maygdan/Short.git
cd Short
```

### Вариант 2: Скачать архивом

1. Перейдите на страницу репозитория: https://github.com/Maygdan/Short
2. Нажмите кнопку **Code** → **Download ZIP**
3. Распакуйте архив в нужную папку
4. Откройте терминал в папке проекта

## Установка

1. **Создайте виртуальное окружение:**
   ```bash
   python -m venv venv
   ```

2. **Активируйте виртуальное окружение:**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - Linux/macOS:
     ```bash
     source venv/bin/activate
     ```

3. **Установите зависимости:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Примените миграции:**
   ```bash
   python manage.py migrate
   ```

5. **Запустите сервер разработки:**
   ```bash
   python manage.py runserver
   ```

Проект будет доступен по адресу: http://127.0.0.1:8000/

## Технологии

- **Django 5.2** — веб-фреймворк
- **Django REST Framework** — создание API
- **djangorestframework-simplejwt** — JWT аутентификация
- **django-cors-headers** — поддержка CORS

## Структура проекта

```
Short/
├── core/              # Основной Django проект (настройки, URL)
├── users/             # Приложение с пользователями
├── screening/         # Приложение скрининга
├── manage.py          # Утилита управления Django
└── requirements.txt   # Зависимости проекта
```

## Приложения

### users
Приложение для управления пользователями с кастомной моделью пользователя.

### screening
Приложение для скрининга с API эндпоинтами.

## API Аутентификация

Проект использует JWT токены для аутентификации:
- Access токен: 1 день
- Refresh токен: 7 дней

Заголовок авторизации: `Authorization: Bearer <access_token>`

## Разработка

### Запуск тестов
```bash
python manage.py test
```

### Создание миграций
```bash
python manage.py makemigrations
python manage.py migrate
```

### Создание суперпользователя
```bash
python manage.py createsuperuser
```

## Лицензия

MIT