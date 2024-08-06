# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
#RUN npm run build

# Указываем порт, который будет использоваться в приложении
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
