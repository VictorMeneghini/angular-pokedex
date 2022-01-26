FROM node:16-alpine as build-step
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build-step ./app/dist/angular-pokedex /usr/share/nginx/html

# Expose port 80
EXPOSE 80