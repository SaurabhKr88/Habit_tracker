FROM node:22-alpine

WORKDIR /app

# copy dependency files
COPY habit_backend/package*.json ./habit_backend/

# install dependencies
RUN npm install --prefix habit_backend

# copy rest of project
COPY . .

EXPOSE 3000

CMD ["node", "habit_backend/server.js"]