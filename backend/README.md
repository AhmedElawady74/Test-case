# Backend

## Описание проекта
Это backend-часть приложения, предоставляющая API для работы с данными. Базируется на Django и Django REST Framework

## Установка и запуск
1. **Клонирование репозитория**
  ```
  git clone https://github.com/AhmedElawady74/Test-case.git
  cd Test-case/backend
  ```
3. **Создание и активация виртуального окружения**
- Для Windows:
  ```
  python -m venv env
  env\Scripts\activate
  ```
- Для Linux/MacOS:
  ```
  python3 -m venv env
  source env/bin/activate
  ```

3. **Установка зависимостей**
  ```
  pip install -r requirements.txt
  ```
5. **Инициализация базы данных**
  ```
  python manage.py makemigrations
  python manage.py migrate
  ```
7. **Создание учетной записи администратора**
  ```
  python manage.py createsuperuser
  ```
8. **Запуск сервера**
  ```
  python manage.py runserver
  ```
## Возможности
- Реализация CRUD-операций для работы с данными
- Аутентификация с использованием JWT
- Организованная структура проекта для удобства разработки
