# Stap 1: Build de app
FROM node:20 AS build

# Maak werkmap in container
WORKDIR /app

# Kopieer package.json en package-lock.json
COPY package*.json ./

# Installeer dependencies
RUN npm install

# Kopieer projectbestanden
COPY . .

# Build de React app (dit genereert /dist)
RUN npm run build

# Stap 2: Gebruik nginx om de app te serveren
FROM nginx:alpine

# Verwijder default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Kopieer de gebuilde app uit de vorige stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose poort 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
