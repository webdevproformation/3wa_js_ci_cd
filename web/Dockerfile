# Dockerfile
# https://medium.com/@pvasu3658/guide-to-dockerizing-and-deploying-your-vite-react-app-8ed6eaca002e
# Step 1: Use a Node.js image to build the app
FROM node:18-alpine as builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Build the app
RUN npm run build


# Step 2: Use an Nginx image to serve the static files
FROM nginx:alpine

# Copy the build files from the builder stage to the Nginx web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

# cas pratique => finaliser le build pour la partie front 
# cas pratique => utiliser une image mongo officiel qui contient une collaction qui s'appelle Etudiant qui contient 3 noms 
# obligé de modifier utiliser librairie Mongoose 

# fin du docker compose 
# Jenkins demain ensemble !!!