# Use official nginx image to serve static files
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/homee.html

# Copy your frontend files to nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server (already default in base image)
CMD ["nginx", "-g", "daemon off;"]
