# Short

Django проект.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Maygdan/Short.git
   cd short
   ```

2. Создайте виртуальное окружение:
   ```bash
   python -m venv venv
   ```

3. Активируйте виртуальное окружение:
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - Linux/macOS:
     ```bash
     source venv/bin/activate
     ```

4. Установите зависимости:
   ```bash
   pip install -r requirements.txt
   ```

5. Примените миграции:
   ```bash
   python manage.py migrate
   ```

6. Запустите сервер разработки:
   ```bash
   python manage.py runserver
   ```

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

## Структура проекта

```
short/
├── core/              # Основной Django проект
│   ├── __init__.py
│   ├── asgi.py        # ASGI конфигурация
│   ├── settings.py    # Настройки проекта
│   ├── urls.py        # Корневой URLconf
│   └── wsgi.py        # WSGI конфигурация
└── manage.py          # Утилита управления Django
```

## Технологии

- Python
- Django

## Лицензия

MIT
