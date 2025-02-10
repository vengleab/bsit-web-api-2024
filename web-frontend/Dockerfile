# Use an official Nginx image to serve the static files
FROM nginx:alpine


# Copy the build output to the Nginx HTML directory
COPY ./build /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]

